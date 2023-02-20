import React from "react";
import { Button, Form, Input } from "antd";
import { AUTHENTICATED_USERNAME_SESSION_KEY, JWT_TOKEN } from "../../../../const/Const";
import { jwtAuthenticate } from "../../../../api/customApi";

interface user {
	username: string;
	password: string;
}

function onFinish(data: user) {
	jwtAuthenticate(data)
		.then((res) => {
			sessionStorage.setItem(JWT_TOKEN, res.data.token);
			sessionStorage.setItem(AUTHENTICATED_USERNAME_SESSION_KEY, data.username);
			window.history.go(-2);
		})
		.catch((e) => {
			console.log(e);
		});
}

function LoginContentBody() {
	return (
		<div className="content-body">
			<Form
				labelCol={{ offset: 0 }}
				wrapperCol={{ span: 4 }}
				onFinish={(data) => {
					onFinish(data);
				}}
			>
				<Form.Item label="username" name="username" rules={[{ required: true, message: "아이디를 입력해주세요." }]}>
					<Input />
				</Form.Item>
				<Form.Item label="Password" name="password" rules={[{ required: true, message: "비밀번호를 입력해주세요." }]}>
					<Input.Password />
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 2 }}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
}

export default LoginContentBody;
