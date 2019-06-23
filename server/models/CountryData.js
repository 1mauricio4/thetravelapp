const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  countryCode: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  capital: {
    type: String,
    required: true
  },
  established: {
    how: {
      type: String
    },
    from: {
      type: String
    },
    when: {
      type: String,
      required: true
    }
  },
  government: {
    govType: {
      type: String
    },
    typeHOS: {
      type: String,
      required: true
    },
    nameHOS: {
      type: String,
      required: true
    }
  },
  state_province: {
    type: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  languages: {
    primary: {
      type: [String],
      required: true
    },
    subLang: {
      type: [String]
    }
  },
  currency: {
    code: {
      type: String,
      required: true
    },
    CurrencyName: {
      type: String,
      required: true
    },
    symbol: {
      type: String
    }
  },
  population: {
    type: String,
    required: true
  },
  callingCode: {
    type: String,
    required: true
  },
  greeting: {
    type: String,
    required: true
  },
  religion: {
    type: [String],
    required: true
  },
  largestCities: {
    type: [String],
    required: true
  },
  historicalFacts: {
    type: [String],
    required: true
  },
  commonWords: {
    type: [String]
  },
  food: {
    type: [String],
    required: true
  },
  funFacts: {
    type: [String],
    required: true
  }
});

module.exports = CountryData = mongoose.model("CountryData", CountrySchema);
