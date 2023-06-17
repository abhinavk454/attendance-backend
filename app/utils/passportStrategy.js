import { Strategy as LocalStrategy } from "passport-local";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const initializePassport = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await prisma.user.findUnique({ where: { username } });

        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }

        const isValidPassword = await compare_password(password, user.password);

        console.log(isValidPassword);

        if (!isValidPassword) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(user);
      } catch (error) {
        done(error);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.user.findUnique({ where: { id } });
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
};

const compare_password = async (passport, new_password) => {
  return passport == new_password ? true : false;
};
