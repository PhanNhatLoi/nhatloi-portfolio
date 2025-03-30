import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 20, fontSize: 12 },
  section: { marginBottom: 10 },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: { fontSize: 14, fontWeight: "bold", textAlign: "center" },
  text: { marginBottom: 5 },
  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 5,
  },
  checkbox: { width: 10, height: 10, borderWidth: 1, marginRight: 5 },
});

const SurveyPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>PHIẾU KHẢO SÁT</Text>
      <Text style={styles.subtitle}>
        (10 hộ gia đình tại thôn Đông Duệ - xã Đông Lạc)
      </Text>

      <View style={styles.section}>
        <Text style={styles.text}>
          Gia đình Ông (Bà): .............................................
        </Text>
        <Text style={styles.text}>
          Địa điểm: ...................................................
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>1. Những thông tin về gia đình:</Text>
        <Text style={styles.text}>
          - Số nhân khẩu trong hộ: ............; Dân tộc: ............
        </Text>
        <Text style={styles.text}>
          - Gia đình có mấy thế hệ: ..........................................
        </Text>
        <Text style={styles.text}>
          - Độ tuổi: - Dưới 18 tuổi: .....; - Từ 18-50: .....; - Trên 50:
          .......
        </Text>
        <Text style={styles.text}>- Trình độ học vấn từ 18 tuổi trở lên:</Text>
        <Text style={styles.text}>
          {" "}
          + Phổ thông: ........; + Trung học CN: .........
        </Text>
        <Text style={styles.text}> + CĐ, ĐH trở lên: .........</Text>
        <Text style={styles.text}>
          - Nghề nghiệp lao động chính: ...................................
        </Text>
        <Text style={styles.text}>
          - Nghề phụ nếu có: ..............................................
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>2. Điều kiện kinh tế:</Text>
        <Text style={styles.text}>
          - Gia đình được đánh giá thuộc diện nào trong Thôn?
        </Text>
        <View style={styles.checkboxGroup}>
          <View style={styles.checkbox} /> <Text>Giàu</Text>
          <View style={styles.checkbox} /> <Text>Khá</Text>
          <View style={styles.checkbox} /> <Text>Trung bình</Text>
          <View style={styles.checkbox} /> <Text>Nghèo</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>
          - Gia đình có người tham gia hoạt động phong trào không?
        </Text>
        <View style={styles.checkboxGroup}>
          <View style={styles.checkbox} /> <Text>Có</Text>
          <View style={styles.checkbox} /> <Text>Không</Text>
        </View>
        <Text style={styles.text}>- Mức độ tham gia:</Text>
        <View style={styles.checkboxGroup}>
          <View style={styles.checkbox} /> <Text>Thường xuyên</Text>
          <View style={styles.checkbox} /> <Text>Thỉnh thoảng</Text>
          <View style={styles.checkbox} /> <Text>Không thường xuyên</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default function PrintPDF() {
  return (
    <div className="p-4">
      <PDFDownloadLink document={<SurveyPDF />} fileName="phieu_khao_sat.pdf">
        {({ loading }) => (
          <button className="p-2 bg-blue-500 text-white">
            {loading ? "Đang tạo PDF..." : "Tải PDF"}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
