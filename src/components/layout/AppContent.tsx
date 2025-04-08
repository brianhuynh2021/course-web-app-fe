import React, { useEffect, useState } from "react";
import { Layout, Card, Row, Col, Button } from "antd";
import { getAllCourses } from "@/api/course";
import { Course } from "@/types/course";

const { Content } = Layout;

const sampleData: Course[] = [
  { id: "1", title: "test data", length: 120, description: "Learn React step by step.", cost: "$49", thumbnail: "https://picsum.photos/id/23/200/300", created_at: "" },
  { id: "2", title: "Next.js and Ant Design", length: 180, description: "Modern websites with Next.js.", cost: "$99", thumbnail: "https://picsum.photos/id/12/00/300", created_at: "" },
  { id: "3", title: "Fullstack Django React", length: 240, description: "Full-stack Django and React.", cost: "$149", thumbnail: "https://picsum.photos/id/45/200/300", created_at: "" },
  { id: "4", title: "Phong van with Brian", length: 60, description: "Interview preparation.", cost: "$99", thumbnail: "https://picsum.photos/id/89/200/300", created_at: "" },
  { id: "5", title: "Advanced React Patterns", length: 150, description: "Advanced React techniques.", cost: "$79", thumbnail: "https://picsum.photos/id/12/200/300", created_at: "" },
  { id: "6", title: "Node.js Essentials", length: 200, description: "Server-side Node.js.", cost: "$89", thumbnail: "https://picsum.photos/id/9/200/300", created_at: "" }
];

const ITEMS_PER_LOAD = 4;

const AppContent: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [visibleCourses, setVisibleCourses] = useState(ITEMS_PER_LOAD);

  useEffect(() => {
    getAllCourses()
      .then((res) => {
        console.log("✅ res.data is array?", Array.isArray(res.data));
        if (Array.isArray(res.data)) {
          setCourses(res.data); // ✅ this works with your backend
        } else {
          console.warn("⚠️ res.data is not an array, using fallback");
          setCourses(sampleData);
        }
      })
      .catch((err) => {
        console.error("❌ Failed to load courses:", err);
        setCourses(sampleData);
      });
  }, []);
  const showMoreCourses = () => {
    setVisibleCourses((prev) => Math.min(prev + ITEMS_PER_LOAD, courses.length));
  };

  return (
    <Content style={{ padding: "60px", backgroundColor: "#f0f2f5" }}>
      <Row gutter={[24, 24]} justify="start">
        {Array.isArray(courses) &&
          courses.slice(0, visibleCourses).map((course) => (
            <Col key={course.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={course.title}
                    src={course.thumbnail}
                    style={{ width: "100%", height: 170, objectFit: "cover" }}
                  />
                }
                style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 8 }}
              >
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                  <Card.Meta
                    title={course.title}
                    description={<p style={{ minHeight: 60 }}>{course.description}</p>}
                  />
                  <div style={{ marginTop: "auto" }}>
                    <p><strong>Thời lượng:</strong> {course.length} phút</p>
                    <p><strong>Chi phí:</strong> {course.cost}</p>
                    <Button type="primary">Xem khóa học</Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
      </Row>

      {Array.isArray(courses) && visibleCourses < courses.length && (
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Button type="default" onClick={showMoreCourses}>
            Show More
          </Button>
        </div>
      )}
    </Content>
  );
};

export default AppContent;