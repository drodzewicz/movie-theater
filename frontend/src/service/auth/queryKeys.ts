const authQueryKeys = {
    all: [{ scope: "auth" }] as const,
    currrentUser: () => [{ ...authQueryKeys.all[0], entity: "current-user" }] as const,
};

export default authQueryKeys;
