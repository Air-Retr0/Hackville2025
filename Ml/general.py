import os
from flask import Flask, request, jsonify
from transformers import BartForConditionalGeneration, BartTokenizer


# Initialize Flask app
app = Flask(__name__)

# Load the model and tokenizer from Hugging Face or local directory
def load_model():
    """
    Loads the pre-trained model and tokenizer from Hugging Face or local directory.
    """
    model_name = "facebook/bart-large-cnn"  # Use your model path if it's saved locally
    print(f"Loading model and tokenizer from {model_name}...")
    
    # Load the model and tokenizer
    tokenizer = BartTokenizer.from_pretrained(model_name)
    model = BartForConditionalGeneration.from_pretrained(model_name)
    
    print("Model and tokenizer loaded successfully!")
    return model, tokenizer

# Summarize text using the model
def summarize_text(text, model, tokenizer, max_length=130, min_length=30, length_penalty=2.0):
    if not text.strip():
        return "Error: Input text is empty."

    inputs = tokenizer.encode("summarize: " + text, return_tensors="pt", max_length=1024, truncation=True)
    
    summary_ids = model.generate(inputs, max_length=max_length, min_length=min_length, length_penalty=length_penalty, num_beams=4, early_stopping=True)
    summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary

# Answer a question based on context
def answer_question(context, question, model, tokenizer):
    if not context.strip() or not question.strip():
        return "Error: Context or question is empty."
    
    # Format the input for the model (BART model here)
    inputs = tokenizer.encode(f"question: {question} context: {context}", return_tensors="pt", max_length=1024, truncation=True)
    
    # Generate answer
    answer_ids = model.generate(inputs, max_length=130, num_beams=4, early_stopping=True)
    
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