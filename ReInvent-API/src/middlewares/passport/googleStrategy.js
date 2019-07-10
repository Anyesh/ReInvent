import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import Sequelize from 'sequelize';
import models from '../../models/sequelize';

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
export const initGoogleStrategy = passport => passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/oauth/google'
    },
    (accessToken, refreshToken, profile, done) => {
      const { given_name, family_name, picture, email } = profile._json;
      if (email.includes('weinvest.be')) {
        return done(null, false, {
          message: 'Competitors are not authorized to access the ReInvent platform'
        });
      } else {
        const { Op } = Sequelize;
        return models.db.transaction((transaction) =>
          models.User.findOrCreate({
            where: {
              googleId: { [Op.eq]: profile.id }
              // email: { [Op.eq]: profile.email }
            },
            defaults: {
              googleId: profile.id,
              email: email,
              avatar: picture,
              firstName: given_name,
              lastName: family_name
            },
            transaction
          }).spread((userResult, created) => {
            const userDetails = userResult.get({ plain: true });
            if (!created && !userResult.id) {
              done(null, false, {
                message: 'An error occured while setting up your account'
              });
            }
            return done(null, {
              userDetails,
              accessToken,
              refreshToken
            });
          })
        );
      }
    }
  )
);
