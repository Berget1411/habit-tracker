"use client";
import { useState, useEffect } from "react";

export function Home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL || "");
      const data = await res.json();
      console.log(data);
      setMessage(data.message);
    };
    fetchMessage();
  }, []);
  return <div>{message}</div>;
}
