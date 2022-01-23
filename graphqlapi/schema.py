import graphene


class Query(graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")


# class Mutation(graphene.ObjectType):
#     pass


schema = graphene.Schema(query=Query)
