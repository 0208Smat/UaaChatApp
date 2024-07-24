export interface LoginRequest {
    username:       string;
    password:       string;
}

export interface LoginResponse {
    message:       string;
    data: LoginResponseData;
}

export interface LoginResponseData {
    id: number;
    username: string;
    token: string;
}

