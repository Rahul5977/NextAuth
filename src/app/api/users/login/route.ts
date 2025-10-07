import { NextResponse } from "next/server";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/db/db";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

connectToDB();
export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }
  //finding user
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  //comparing password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  }
  const tokenData = {
    id: user._id,
    email: user.email,
    username: user.username,
  };
  //create token
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not defined");
  }
  const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  const response = NextResponse.json(
    { message: "Login successful", user: tokenData },
    { status: 200 }
  );
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 3600,
  });
  return response;
}
