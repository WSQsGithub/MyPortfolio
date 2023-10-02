import React, { useState, useEffect } from 'react';

function EducationList() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    // 在这里发起 MongoDB 查询并更新 educations 状态
    // ...

    // 示例：假设从 MongoDB 中获取教育信息并将其设置到 educations 状态
    const mockEducations = [
      { _id: 1, school: 'Tongji University', degree: 'Bachelor in Automation', year: '2018-2022' },
      { _id: 2, school: 'Shanghai Jiao Tong University', degree: 'Master in Control Science', year: '2022-now' },
      // ...
    ];

    setEducations(mockEducations);
  }, []);

  return (
    <div>
      <h2>Education List</h2>
      <ul>
        {educations.map((education) => (
          <li key={education._id}>
            {education.school} - {education.degree} ({education.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationList;
