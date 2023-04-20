"use client";

import React from "react";
import { useState, useEffect } from "react";

const UserStats = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userId = "643f3cc7d98c8f88c2e0d172";
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="top-bar">
      <h1>{user.userName}</h1> {/* will be user.name for database call  */}
      <div className="stats-container">
        <div className="stats">
          <h2>{user.age}</h2> {/* will be user.age for database call  */}
          <h2>{user.height}</h2> {/* will be user.height for database call  */}
          <h2>{user.weight}</h2> {/* will be user.weight for database call  */}
        </div>
        <div className="stats">
          <h4>Age</h4>
          <h4>Height</h4>
          <h4>Weight</h4>
        </div>
      </div>
    </div>
  );
};

export default UserStats;
