import re
from typing import List, Dict

class BookRegistry:
    def __init__(self):
        self.books: List[Dict[str, str]] = []
    
    def validate_isbn(self, isbn: str) -> bool:
        """Validate ISBN-10 or ISBN-13 format"""
        # Remove hyphens and spaces
        isbn_clean = isbn.replace("-", "").replace(" ", "")
        
        # Check ISBN-13 (13 digits)
        if len(isbn_clean) == 13 and isbn_clean.isdigit():
            return self._validate_isbn13(isbn_clean)
        
        # Check ISBN-10 (10 characters, last can be X)
        if len(isbn_clean) == 10 and re.match(r'^\d{9}[\dX]$', isbn_clean):
            return self._validate_isbn10(isbn_clean)
        
        return False
    
    def _validate_isbn13(self, isbn: str) -> bool:
        """Validate ISBN-13 checksum"""
        total = sum(int(isbn[i]) * (1 if i % 2 == 0 else 3) for i in range(12))
        checksum = (10 - (total % 10)) % 10
        return int(isbn[12]) == checksum
    
    def _validate_isbn10(self, isbn: str) -> bool:
        """Validate ISBN-10 checksum"""
        total = sum(int(isbn[i]) * (10 - i) for i in range(9))
        check_digit = (11 - (total % 11)) % 11
        expected = 'X' if check_digit == 10 else str(check_digit)
        return isbn[9] == expected
    
    def register_book(self, isbn: str, title: str, author: str) -> bool:
        """Register a book if ISBN is valid"""
        if not self.validate_isbn(isbn):
            print(f"❌ Invalid ISBN: {isbn}")
            return False
        
        if any(book['isbn'] == isbn for book in self.books):
            print(f"❌ Book with ISBN {isbn} already registered")
            return False
        
        book = {'isbn': isbn, 'title': title, 'author': author}
        self.books.append(book)
        print(f"✓ Book '{title}' registered successfully")
        return True
    
    def list_books(self):
        """Display all registered books"""
        if not self.books:
            print("No books registered yet")
            return
        
        for i, book in enumerate(self.books, 1):
            print(f"{i}. {book['title']} by {book['author']} (ISBN: {book['isbn']})")


# Main program
if __name__ == "__main__":
    registry = BookRegistry()
    
    while True:
        print("\n--- Book Registry ---")
        print("1. Register book")
        print("2. List books")
        print("3. Exit")
        
        choice = input("Select option: ").strip()
        
        if choice == "1":
            isbn = input("Enter ISBN: ").strip()
            title = input("Enter book title: ").strip()
            author = input("Enter author name: ").strip()
            registry.register_book(isbn, title, author)
        
        elif choice == "2":
            registry.list_books()
        
        elif choice == "3":
            print("Goodbye!")
            break
        
        else:
            print("Invalid option")