import { useMutation, gql } from "@apollo/client";

const UPDATE_BASIC_INFO = gql`
mutation updateBasicInfo($about: String!, $dob: String!, $gender: String!, $phone: String!, $picture: GenericScalar!, $profession: String!){
    updateBasicInfo(
        about: $about,
        dob: $dob,
        gender: $gender,
        phone: $phone,
        picture: $picture,
        profession: $profession
    )
}
`