import gql from "graphql-tag";

const fields = `
    id
    name
    slug
    description
    roles { id name }
`;

export const LIST_GROUPS = gql`
    query listGroups(
        $where: JSON
        $sort: JSON
        $search: SecurityGroupSearchInput
        $limit: Int
        $after: String
        $before: String
    ) {
        security {
            groups: listGroups(
                where: $where
                sort: $sort
                search: $search
                limit: $limit
                after: $after
                before: $before
            ) {
                data {
                    id
                    name
                    description
                    createdOn
                }
                meta {
                    cursors {
                        next
                        previous
                    }
                    hasNextPage
                    hasPreviousPage
                    totalCount
                }
            }
        }
    }
`;

export const READ_GROUP = gql`
    query getGroup($id: ID!) {
        security {
            group: getGroup(id: $id){
                data {
                    ${fields}
                }
                error {
                    code
                    message
                }
            }
        }
    }
`;

export const CREATE_GROUP = gql`
    mutation createGroup($data: SecurityGroupInput!){
        security {
            group: createGroup(data: $data) {
                data {
                    ${fields}
                }
                error {
                    code
                    message
                    data
                }
            }
        }
    }
`;

export const UPDATE_GROUP = gql`
    mutation updateGroup($id: ID!, $data: SecurityGroupInput!){
        security {
            group: updateGroup(id: $id, data: $data) {
                data {
                    ${fields}
                }
                error {
                    code
                    message
                    data
                }
            }
        }
    }
`;

export const DELETE_GROUP = gql`
    mutation deleteGroup($id: ID!) {
        security {
            deleteGroup(id: $id) {
                data
                error {
                    code
                    message
                }
            }
        }
    }
`;
