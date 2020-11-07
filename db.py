
from base import Base, engine, Session

Base.metadata.create_all(engine)
session = Session()
