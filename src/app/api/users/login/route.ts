import { NextResponse } from "next/server";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import {connectToDB} from "@/db/db";

connectToDB();
export async function POST(request: Request) {
  const { email, password } = await request.json();
  if (!email || !password) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
  return NextResponse.json({ message: "Login successful" }, { status: 200 });
}
