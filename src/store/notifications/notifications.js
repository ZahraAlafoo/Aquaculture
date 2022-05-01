import { API } from 'aws-amplify';
/*import { getTodo as getQuery } from '@/graphql/queries';
import { listTodos as listQuery } from '@/graphql/queries';

export const notificationInfo = {
    namespaced: true,
    state: {error: null, notifications: null},
    
    actions: {
        async getAlbumsData({ commit }) {
            const albumsData = await API.graphql(graphqlOperation(listQuery));
            commit("setAlbums", albumsData.data.listTodos.items);
        },
    },
    
    getters: {
        notifications: (state) => state.notification
    }
}*/