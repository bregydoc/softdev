from sqlalchemy import create_engine

from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# engine = create_engine('postgresql://usr:pass@localhost:5432/sqlalchemy')
engine = create_engine('sqlite:///softdev2.db', echo=True)

Session = sessionmaker(bind=engine)
Base = declarative_base()
