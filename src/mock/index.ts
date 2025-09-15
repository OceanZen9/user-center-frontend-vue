import Mock from "mockjs";

// 模拟用户登录
Mock.mock(/\/api\/user\/login/, "post", (options: any) => {
  const { userAccount, userPassword } = JSON.parse(options.body);
  if (userAccount === "admin" && userPassword === "123456") {
    return {
      code: 0,
      data: {
        id: 1,
        username: "admin",
        userAccount: "admin",
        avatarUrl:
          "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        gender: 0,
        phone: "123456789",
        email: "admin@example.com",
        userStatus: 0,
        userRole: 1,
        createTime: new Date(),
        updateTime: new Date(),
      },
      message: "ok",
    };
  } else {
    return {
      code: 40000,
      data: null,
      message: "用户名或密码错误",
    };
  }
});

// 模拟用户注册
Mock.mock(/\/api\/user\/register/, "post", {
  code: 0,
  data: 1,
  message: "ok",
});

// 模拟用户注销
Mock.mock(/\/api\/user\/logout/, "post", {
  code: 0,
  data: true,
  message: "ok",
});

// 模拟获取当前用户
Mock.mock(/\/api\/user\/current/, "get", {
  code: 0,
  data: {
    id: 1,
    username: "admin",
    userAccount: "admin",
    avatarUrl:
      "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
    gender: 0,
    phone: "123456789",
    email: "admin@example.com",
    userStatus: 0,
    userRole: 1,
    createTime: new Date(),
    updateTime: new Date(),
  },
  message: "ok",
});

// 模拟搜索用户列表
Mock.mock(/\/api\/user\/search/, "get", () => {
  const userList = Mock.mock({
    "data|10": [
      {
        "id|+1": 1,
        username: "@cname",
        userAccount: "@word(8, 12)",
        // 修正了引号问题
        avatarUrl: "@image('100x100', '#50B347', '#FFF', 'png', '@word(1)')",
        // 修正了随机数语法
        gender: "@integer(0, 1)",
        phone: /^1[3456789]\d{9}$/,
        email: "@email",
        userStatus: 0,
        // 修正了随机数语法
        userRole: "@integer(0, 1)",
        createTime: "@datetime",
        updateTime: "@datetime",
      },
    ],
  });

  return {
    code: 0,
    data: userList.data,
    message: "ok",
  };
});

// 模拟删除用户
Mock.mock(RegExp(/\/api\/user\/delete/ + "/.*"), "post", {
  code: 0,
  data: true,
  message: "ok",
});
