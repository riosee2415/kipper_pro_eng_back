import Sns from "../../../models/Sns";

export default {
  Query: {
    getAllSns: async (_, args) => {
      try {
        const result = await Sns.find({ isDelete: false });
        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },
  Mutation: {
    createSns: async (_, args) => {
      const { platform, url } = args;

      try {
        const result = await Sns.create({
          platform,
          url,
          isDelete: false,
        });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateSns: async (_, args) => {
      const { id, platform, url } = args;

      try {
        const result = await Sns.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              platform,
              url,
            },
          }
        );
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    deleteSns: async (_, args) => {
      const { id } = args;

      try {
        const result = await Sns.updateOne(
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
