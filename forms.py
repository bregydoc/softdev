from wtforms import Form, BooleanField, StringField, IntegerField
from wtforms import validators


class CreateBookForm(Form):
    name = StringField("name", [validators.DataRequired()])
    availability = BooleanField("availability", [validators.DataRequired()])
    score = IntegerField("score", [validators.DataRequired()])
    isbn = StringField("isbn", [validators.DataRequired()])
