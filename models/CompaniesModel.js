const mongoose = require("mongoose");

const CompaniesSchema = mongoose.Schema(
{   
name:{
  type: String,
  require: true,
},
email:{
  type: String,
  require: true,
  unique: true,
},
ceo:{
  type: String,
  require: true,
},
description:{
  type: String,
  require: true,
},
address:{
    type: String,
    require: true,
  },
no_of_offices:{
  type: Number,
  require: true,
},
website:{
    type: String,
    require: true,
  },
no_of_employees:{
  type: Number,
},
established_in:{
  type: String,
},
fax:{
  type: Number,
},
phone:{
  type: Number,
  require: true,
},
logo:{
  type: String,
},
slug:{
  type: String,
},
is_active:{
  type: String,
  require: true,
  default: '0',
},
is_featured:{
  type: String,
  require: true,
  default: '0',
},
ownership_type_id:{
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "ownership_types"
  },
industry_id:{
  type: mongoose.Schema.Types.ObjectId,
  require: true,
  ref: "industries"
},
country_id:{
  type: mongoose.Schema.Types.ObjectId,
  require: true,
  ref: "countries"
},
state_id:{
  type: mongoose.Schema.Types.ObjectId,
  require: true,
  ref: "states"
},
city_id:{
  type: mongoose.Schema.Types.ObjectId,
  require: true,
  ref: "cities"
},
map:{
  type: String,
},
facebook:{
  type: String,
},
twitter:{
  type: String,
},
linkedin:{
  type: String,
},
google_plus:{
  type: String,
},
pinterest:{
  type: String,
},
package_id:{
  type: String,
},
package_start_date:{
  type: String,
},
package_end_date:{
  type: String,
},
},
  {
    timestamps: true,
  }
);

CompaniesSchema.index({ title: "text" });

module.exports = mongoose.model("companies", CompaniesSchema);
