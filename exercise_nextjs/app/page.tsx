import Company from "@/pages/Company";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <h5>Họ và tên: Phạm Trung Hiếu</h5>
      <Company />
      <Button />
      <h5>danh sách các icon</h5>
      <ul style={{ display: "flex", gap: "20px", listStyleType: "none" }}>
        <li>
          <i className="fa-solid fa-mug-saucer"></i>
        </li>
        <li>
          <i className="fa-solid fa-eye"></i>
        </li>
        <li>
          <i className="fa-solid fa-file"></i>
        </li>
      </ul>
    </>
  );
}
