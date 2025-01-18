from flask import Flask, request, jsonify
from transformers import T5ForConditionalGeneration, T5Tokenizer

# Initialize Flask app
app = Flask(__name__)

# Load the pre-trained T5 model and tokenizer
def load_model():
    model_name = "t5-large"  # You can use 't5-small', 't5-base', or 't5-large' depending on your resources
    print(f"Loading model and tokenizer from {model_name}...")
    
    tokenizer = T5Tokenizer.from_pretrained(model_name)
    model = T5ForConditionalGeneration.from_pretrained(model_name)
    
    print("Model and tokenizer loaded successfully!")
    return model, tokenizer

# Summarize text using the T5 model
def summarize_text(text, model, tokenizer, max_length=150, min_length=50):
    """
    Summarizes the given text using the T5 model.
    
    Parameters:
        text (str): The input text to summarize.
        model: The T5 model.
        tokenizer: The tokenizer for the T5 model.
        max_length (int): Maximum length of the summary.
        min_length (int): Minimum length of the summary.
    
    Returns:
        str: The summarized text.
    """
    if not text.strip():
        return "Error: Input text is empty."

    # Prepare the input text by prefixing with "summarize: "
    input_text = f"summarize: {text}"
    
    # Tokenize the input text
    inputs = tokenizer.encode(input_text, return_tensors="pt", max_length=1024, truncation=True)
    
    # Generate summary
    summary_ids = model.generate(inputs, max_length=max_length, min_length=min_length, length_penalty=2.0, num_beams=4, early_stopping=True)
    
    # Decode the summary
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary

# Answer a question based on context using the T5 model
def answer_question(context, question, model, tokenizer):
    """
    Answers the given question based on the provided context using the T5 model.
    
    Parameters:
        context (str): The input context to answer the question.
        question (str): The question to answer.
        model: The T5 model.
        tokenizer: The tokenizer for the T5 model.
    
    Returns:
        str: The answer to the question.
    """
    if not context.strip() or not question.strip():
        return "Error: Context or question is empty."

    # Format the input for the model (T5 format: "question: {question} context: {context}")
    input_text = f"question: {question} context: {context}"
    
    # Tokenize the input text
    inputs = tokenizer.encode(input_text, return_tensors="pt", max_length=5000, truncation=True)
    
    # Generate answer
    answer_ids = model.generate(inputs, max_length=150, num_beams=4, early_stopping=True)
    
    # Decode the output tokens to answer
    answer = tokenizer.decode(answer_ids[0], skip_special_tokens=True)
    return answer

@app.route('/process', methods=['POST'])
def process_text():
    """
    API endpoint to process incoming text and generate a summary or answer.
    """
    data = request.get_json()  # Get JSON data from the request
    action = data.get('action', '')
    text = data.get('text', '')
    question = data.get('question', '')

    if not text:
        return jsonify({"error": "No text provided"}), 400

    # Load model and tokenizer
    model, tokenizer = load_model()

    if action == 'summarize':
        summary = summarize_text(text, model, tokenizer)
        return jsonify({"summary": summary})
    
    elif action == 'answer' and question:
        # Perform question answering
        answer = answer_question(text, question, model, tokenizer)
        return jsonify({"answer": answer})
    
    else:
        return jsonify({"error": "Invalid action or missing question"}), 400

if __name__ == '__main__':
    app.run(debug=True)
