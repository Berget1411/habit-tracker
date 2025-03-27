"use client";
import { useState, useEffect } from "react";

export function Home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        console.log("Fetching from:", apiUrl);
        console.log("Fetching from:", process.env.NEXT_PUBLIC_API_URL);
        const res = await fetch(apiUrl || "");
        console.log("Response status:", res.status);

        // Log the actual response text for debugging
        const text = await res.text();
        console.log("Response text:", text);

        // Try to parse as JSON
        let data;
        try {
          data = JSON.parse(text);
        } catch (e) {
          console.error("Failed to parse response as JSON:", e);
          setMessage("Error: Backend returned invalid data");
          return;
        }

        console.log("Parsed data:", data);
        setMessage(data.message || "No message received");
      } catch (error) {
        console.error("Fetch error:", error);
        setMessage("Error connecting to backend");
      }
    };
    fetchMessage();
  }, []);
  return <div>{message}</div>;
}
