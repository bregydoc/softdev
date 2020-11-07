from sqlalchemy.sql.schema import Column, ForeignKey, Table
from sqlalchemy.sql.sqltypes import Boolean, Date, Integer, String
from sqlalchemy.orm import relationship
from base import Base

books_autor_relation = Table(
    'autor_books', Base.metadata,
    Column('book_id', Integer, ForeignKey('book.id')),
    Column('autor_id', Integer, ForeignKey('autor.id'))
)


class Book(Base):
    __tablename__ = "books"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    availability = Column(Boolean)
    score = Column(Integer)
    isbn = Column(String)


class Autor(Base):
    __tablename__ = "autors"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    reviews = Column(Integer)
    publication_date = Column(Date)

    books = relationship("Book", secondary=books_autor_relation)
