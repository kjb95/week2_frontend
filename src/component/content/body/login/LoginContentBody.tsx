import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { AUTHENTICATED_USERNAME_SESSION_KEY, JWT_TOKEN } from "../../../../const/Const";
import { jwtAuthenticate } from "../../../../api/customApi";

interface user {
	username: string;
	password: string;
}

function onFinish(data: user, setIsLoginFail: React.Dispatch<React.SetStateAction<boolean>>) {
	jwtAuthenticate(data)
		.then((res) => {
			sessionStorage.setItem(JWT_TOKEN, res.data.token);
			sessionStorage.setItem(AUTHENTICATED_USERNAME_SESSION_KEY, data.username);
			window.history.go(-2);
		})
		.catch((e) => {
			setIsLoginFail(true);
			console.log(e);
		});
}

function LoginFailText() {
	return (
		<div>
			<h3 style={{ color: "red" }}>회원정보를 확인해주세요</h3>
			<br />
		</div>
	);
}

function LoginContentBody() {
	const [isLoginFail, setIsLoginFail] = useState<boolean>(false);

	return (
		<div className="content-body">
			<Form
				labelCol={{ offset: 0 }}
				wrapperCol={{ span: 4 }}
				onFinish={(data) => {
					onFinish(data, setIsLoginFail);
				}}
			>
				{isLoginFail && <LoginFailText />}
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
