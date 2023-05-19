import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Course() {
    // Khai bao searchParam 
     const [searchParam, setSearchParam]=  useSearchParams();
  return (
    <div>
        <h2>Search Params</h2>
        <table border={1}>
            <thead>
                <tr>
                    <th>Stt</th>
                    <th>Course</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <th>ReactJS</th>
                    <th>1200</th>
                    <th>
                        <button onClick={() => setSearchParam({course: "ReactJS", time:1200})}>Detail</button>
                    </th>
                </tr>
                <tr>
                    <th>2</th>
                    <th>JAVA</th>
                    <th>1400</th>
                    <th>
                        <button onClick={() => setSearchParam({course: "JAVA", time:1400})}>Detail</button>
                    </th>
                </tr>
            </tbody>
        </table>
        <h2>Chi tiết khoá học</h2>
        <p>Tên khoá học: {searchParam.get("course")} - Thời gian : {searchParam.get("time")}</p>
    </div>
  );
}

export default Course