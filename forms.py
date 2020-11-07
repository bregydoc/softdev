from wtforms import Form, BooleanField, StringField, IntegerField
from wtforms import validators


class CreateBookForm(Form):
    name = StringField("name", [validators.DataRequired()])
    availability = BooleanField("availability", [validators.DataRequired()])
    score = IntegerField("score", [validators.DataRequired()])
    isbn = StringField("isbn", [validators.DataRequired()])
    # username = StringField('Username', [validators.Length(min=4, max=25)])
    # email = StringField('Email Address', [validators.Length(min=6, max=35)])
    # password = PasswordField('New Password', [
    #     validators.DataRequired(),
    #     validators.EqualTo('confirm', message='Passwords must match')
    # ])
    # confirm = PasswordField('Repeat Password')
    # accept_tos = BooleanField('I accept the TOS', [validators.DataRequired()])
