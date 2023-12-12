#placeholder will need to be adapted
# Basic endpoint for 501(c)(3) info service

#!/usr/bin/env python3

from flask import Flask, request, jsonify
from enum import Enum
import locale

app = Flask(__name__)

class EntityType(str, Enum):
    FOUNDATION = "foundation"
    CHARITY = "charity"
    BOTH = "*"
    
    @staticmethod
    def from_str(label):
        if label == 'foundation':
            return EntityType.FOUNDATION
        elif label == 'charity':
            return EntityType.CHARITY
        elif label == '*':
            return EntityType.BOTH
        else:
            raise NotImplementedError

class ConstraintMatcher(str, Enum):
    GREATER_THAN = '>'
    GREATER_THAN_EQUALS = '>='
    LESS_THAN = '<'
    LESS_THAN_EQUALS = '<='
    EQUALS = '='

    @staticmethod
    def from_str(label):
        if label == '>':
            return ConstraintMatcher.GREATER_THAN
        elif label == '>=':
            return ConstraintMatcher.GREATER_THAN_EQUALS
        elif label == '<':
            return ConstraintMatcher.LESS_THAN
        elif label == '<=':
            return ConstraintMatcher.LESS_THAN_EQUALS
        elif label == '=':
            return ConstraintMatcher.EQUALS
        else:
            raise NotImplementedError

@app.route("/query", methods=["POST"])
def query():
    # TODO: Validations on these user-controlled inputs
    state = request.json['state']
    city = request.json['city']
    if request.json['amount']:
        locale.setlocale( locale.LC_ALL, 'en_US.UTF-8' ) 
        amount = locale.atoi(request.json['amount'])
    entity_type = [EntityType.from_str(x) for x in request.json['entity_type']]

    matcher = request.json['matcher']
    if matcher:
        try:
            matcher = ConstraintMatcher.from_str(matcher)
        except NotImplementedError as nie:
            return 400, "validation failed for amount constraint"

    return {
       'state': state, 
       'city': city, 
       'amount': amount, 
       'entity_type': entity_type,
       'matcher': matcher
    }

if __name__ == '__main__':
    app.run(debug=True)