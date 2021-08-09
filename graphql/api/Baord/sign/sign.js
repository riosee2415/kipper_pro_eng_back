import { CURRENT_TIME } from "../../../../utils/commonUtils";
import Sign from "../../../models/Sign";

export default {
  Query: {
    getSign: async (_, args) => {
      const { limit, currentPage } = args;
      try {
        const result = await Sign.find()
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(currentPage * limit);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },

    getSignTotalPage: async (_, args) => {
      const { limit } = args;

      try {
        const result = await Sign.find().sort({
          createdAt: -1,
        });

        const cnt = result.length;

        const realTotalPage = cnt % limit > 0 ? cnt / limit + 1 : cnt / limit;

        return parseInt(realTotalPage);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },

    getSignDetail: async (_, args) => {
      const { id } = args;
      try {
        const result = await Sign.findOne({ _id: id });

        try {
          await Sign.updateOne({ _id: id }, { hit: result.hit + 1 });
          return result;
        } catch (e) {
          console.log(e);
          return {};
        }
      } catch (e) {
        console.log(e);
        return {};
      }
    },
    getSignNextId: async (_, args) => {
      const { id } = args;
      try {
        const result = await Sign.findOne({
          _id: { $gt: id },
          isDelete: false,
        }).sort({
          createdAt: 1,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
    getSignBeforeId: async (_, args) => {
      const { id } = args;
      try {
        const result = await Sign.findOne({
          _id: { $lt: id },
          isDelete: false,
        })
          .sort({
            createdAt: -1,
          })
          .limit(1);

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },

    getSignList: async (_, args) => {
      try {
        const result = await Sign.find({ isDelete: false }).sort({
          createdAt: 1,
        });

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
  },

  Mutation: {
    createSign: async (_, args) => {
      const { thumbnail, title, type } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Sign.create({
          thumbnail,
          title,
          type,
          isDelete: false,
        });

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    modifySignBasic: async (_, args) => {
      const { id, title, thumbnail, type } = args;

      try {
        const result = await Sign.updateOne(
          { _id: id },
          {
            $set: {
              title,
              thumbnail,
              type,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deleteSign: async (_, args) => {
      const { id } = args;

      try {
        const current = await CURRENT_TIME();

        const result = await Sign.updateOne(
          { _id: id },
          {
            $set: {
              isDelete: true,
              deletedAt: current,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
