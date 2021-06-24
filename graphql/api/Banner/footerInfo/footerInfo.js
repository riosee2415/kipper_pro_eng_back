import FooterInfo from "../../../models/FooterInfo";

export default {
  Query: {
    getAllFooterInfo: async (_, args) => {
      try {
        const result = await FooterInfo.find();

        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },

  Mutation: {
    createFooterList: async (_, args) => {
      const { title, content } = args;
      try {
        const result = await FooterInfo.create({
          title,
          content,
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    deleteFooterList: async (_, args) => {
      const { id } = args;
      try {
        const result = await FooterInfo.deleteOne({ _id: id });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    updateFooterList: async (_, args) => {
      const { id, title, content } = args;
      try {
        const result = await FooterInfo.updateOne(
          { _id: id },
          {
            title,
            content,
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
