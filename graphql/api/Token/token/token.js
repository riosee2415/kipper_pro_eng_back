import Token from "../../../models/Token";
import { CURRENT_TIME } from "../../../../utils/commonUtils";

export default {
  Query: {
    getAllToken: async (_, args) => {
      try {
        const result = await Token.find({
          isDelete: false,
        }).sort({ createdAt: -1 });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    createToken: async (_, args) => {
      const {
        userId,
        passWord,
        passWordRe,
        contry,
        level,
        companyName,
        charge,
        email,
        tel,
      } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Token.create({
          userId,
          passWord,
          passWordRe,
          contry,
          level,
          companyName,
          charge,
          email,
          tel,
          createdAt: current,
          isDelete: false,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    deleteToken: async (_, args) => {
      const { id } = args;

      try {
        const result = await Token.updateOne(
          { _id: id },
          {
            isDelete: true,
          }
        );

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
