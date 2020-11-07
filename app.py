from forms import CreateBookForm
from flask import Flask, request, jsonify
from db import session
from models import Book

app = Flask(__name__)


@app.route('/api/books', methods=["POST"])
def books():
    form = CreateBookForm(request.form)
    if form.validate():
        book = Book(name=form.name.data, availability=form.availability.data,
                    isbn=form.isbn.data, score=form.score.data)

        session.add(book)

        return jsonify({"data": {"book": {"id": book.id, "name": book.name, "isbn": book.isbn, "score": book.score, "availability": book.availability}}})

    return jsonify({"error": "invalid form"})
