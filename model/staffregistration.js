var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
   
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
        validate: {
            
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
    },
    password:{
        type:String
    },
    phonenumber:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
}, {timestambs: true}
)

userSchema.pre("save", function (next) {
    const user = this;
    
    
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (saltError, salt) {
        if (saltError) {
          return next(saltError);
        } else {
          bcrypt.hash(user.password, salt, function (hashError, hash) {
            if (hashError) {
              return next(hashError);
            }
            user.password = hash;
            next();
          });
        }
      });
    } else {
      next();
    }
  });
  
  userSchema.methods.comparePassword = async function (password, callback) {
    bcrypt.compare(password, this.password, async function (error, isMatch) {
      if (error) {
        return callback(error);
      } else {
        callback(null, isMatch);
      }
    });
  };

  userSchema.methods.encryptPassword = async function (password, callback) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return callback(saltError);
      } else {
        bcrypt.hash(password, salt, function (hashError, hash) {
          if (hashError) {
            return callback(hashError);
          }
          // user.password = hash;
          callback(null, hash);
        });
      }
    });
  };
const User = mongoose.model('user',userSchema)

module.exports = User