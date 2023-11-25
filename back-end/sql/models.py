from sqlalchemy import Column, String, ForeignKey, Integer
from sqlalchemy.orm import relationship
from .database import Base

class Stack(Base):
    __tablename__ = "stacks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)

    cards = relationship("Card", back_populates="owner")

class Card(Base):
    __tablename__ = "cards"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    stack_id = Column(Integer, ForeignKey("stacks.id"))

    owner = relationship("Stack", back_populates="cards")