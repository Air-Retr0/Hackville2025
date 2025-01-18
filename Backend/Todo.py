import heapq
from datetime import datetime
todo_queue = []

def add_task(todo_queue):
    task = input("Enter the task description: ").strip()
    due_date_str = input("Enter the due date (YYYY-MM-DD): ").strip()
    
    try:
        due_date = datetime.strptime(due_date_str, "%Y-%m-%d")
        heapq.heappush(todo_queue, (due_date, task))
        print(f"Task added: {task}, Due Date: {due_date.strftime('%Y-%m-%d')}")
    except ValueError:
        print("Invalid date format! Please use YYYY-MM-DD.")

def process_next_task(todo_queue):
    if todo_queue:
        due_date, task = heapq.heappop(todo_queue)
        print(f"Processing: {task}, Due Date: {due_date.strftime('%Y-%m-%d')}")
    else:
        print("No tasks left!")

def display_tasks(todo_queue):
    if todo_queue:
        print("\nTo-Do List:")
        for due_date, task in sorted(todo_queue):
            print(f"- {task}, Due Date: {due_date.strftime('%Y-%m-%d')}")
    else:
        print("No tasks in the list!")

def main():
    while True:
        print("\nMenu:")
        print("1. Add a task")
        print("2. Process the next task")
        print("3. View all tasks")
        print("4. Exit")
        
        choice = input("Choose an option: ").strip()
        
        if choice == "1":
            add_task(todo_queue)
        elif choice == "2":
            process_next_task(todo_queue)
        elif choice == "3":
            display_tasks(todo_queue)
        elif choice == "4":
            print("Exiting the to-do list manager. Goodbye!")
            break
        else:
            print("Invalid choice! Please select a valid option.")

if __name__ == "__main__":
    main()