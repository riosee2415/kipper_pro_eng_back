import Location from "../../../models/Location";

export default {
  Query: {
    getAllLocation: async (_, args) => {
      try {
        const result = await Location.find({ isDelete: false });
        return result;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },
  Mutation: {
    createLocation: async (_, args) => {
      const { title, link } = args;

      try {
        const result = await Location.create({
          title,
          link,
          isDelete: false,
        });

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    updateLocation: async (_, args) => {
      const { id, title, link } = args;

      try {
        const result = await Location.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              title,
              link,
            },
          }
        );
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    // deleteLocation: async (_, args) => {
    //   const { id } = args;

    //   try {
    //     const result = await Location.updateOne(
    //       { _id: id },
    //       {
    //         isDelete: true,
    //       }
    //     );

    //     return true;
    //   } catch (error) {
    //     console.log(error);
    //     return false;
    //   }
    // },
  },
};
