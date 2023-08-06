
import QRCode from 'react-qr-code';
import { RC4Decrypt, RC4Encrypt } from './enrcyptRc';
import { useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from './enviroment';

function App() {
  const [hasil, setHasil] = useState("");
  const [id, setId] = useState("");
  const [pesanan, setPesanan] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = new URLSearchParams(window.location.search);

  const [data, setData] = useState({});

  const _load_data = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("id_data", query.get("code"));
    axios.post(baseUrl("site/get_data_single"), formData)
      .then(respon => {
        setLoading(false);
        setData(respon.data.data);
        setPesanan(JSON.parse(respon.data.data.pesanan));
      })
  }
  const _load = async () => {
    setLoading(true);
    axios.get(baseUrl("public/gtz")).then(respon => {
      var c = RC4Decrypt(respon.data.result).split(',');
      setHasil(c[1]);
      setLoading(false);


    });

  }
  useEffect(() => {

    setId(query.get("code"));

    _load();
    _load_data();
  }, []);
  return (
    <>
      {loading && <div style={{ width: "100%", zIndex: "999999", textAlign: "center", position: "fixed", top: "40%", left: "34%" }}>
        <div style={{ textAlign: "center", width: "100px", fontWeight: "bold", color: "BLUE", padding: "10px", background: "#fff", border: "2px solid #DFDFDF" }}>Mengambil<br />data...</div>
      </div >}
      <div style={{ opacity: loading ? "0.3" : "1" }}>
        <div style={{ textAlign: 'center', color: '#FFF', fontWeight: 'bold', background: '#1783FF', padding: 15 }}>
          Tiket
          <div style={{ height: 150 }} />
        </div>
        <div style={{ marginTop: '-160px' }}>
          <div style={{ margin: 15, background: '#fff', borderRadius: 10 }}>
            <div style={{ padding: 15 }}>

              <div style={{ fontWeight: 'bolder' }}>
                Tiket Nobar Preoder Minuman  Special Gear 5
              </div>
              <br />
              <table>
                <tbody>
                  <tr>
                    <td width="40px">
                      <img style={{ width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAQ1JREFUaEPtWdEOwiAMvP2Zfpn6ZfpnmhqXGARuDLeW7Pq0hAG9a3uwdcLgNg3uPwTAO4KKQPQInABcPk7a8952A3CtbcpS6Lm3x4X9zgAeubEaAEM+s++Nw5w3ED9WAxCFfXP6LwBSsClAlo4pe2w+G3+v1xIBAUhCwBhm48eLAFOi3hpYtX5LDazaoDKpVeWyvgrAF8PhU0gyKhntvAsNn0JMRrce31xGBYAwoAgMX8QCoIOs8yBjMhn+MicApAZWEXSoDxrJqGS0U0aHS6E7AI+eQEmNmm+jkQAUGx01GTX2DUQEK/q55Pj3anTMHRljP9udYb/XIzBPfVgSAbqI5wsC4Mm+asCbfdv/BQJHYzF1fzpbAAAAAElFTkSuQmCC" />
                    </td>
                    <td>
                      Pemutaran Episode 1070 -1071
                    </td>
                  </tr>
                  <tr>
                    <td width="40px">
                      <img style={{ width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAX1JREFUaEPtmVGOwjAMRIeTsZwMONkuJwMZNRUbmXjspAoVzm9TZ57tpO30gJ2Pw871IwFmVzAr8IkV+AHwC+APwA3AZbBIiXceFV9rIREvEK/jOgCkCNfyEY6vAdwbGY8s1BJeL+WO7wUoCzILeYSHQaIALZAe4W4QBkCyLZuuNWSODGZePYeNrx4mDECZ05PZ15ar95gn/mk5vdZkegDKTR4Qba+8A2Dj/9McAWAWam1yC8CKPwygLMQK2mR+TwU2EaScFM0EJQCAbCHjGZMtZH30ZAtlC1UZmNoS+RyYfa5nBbICMO3KoYdEvszNbrmvqICcbFt+InbFZypgWYzWptzUBNAAirlr+UDFp+mxSd6twdgwz3tbr8pM5jRTijWqokaY6UrUWWFAjDfi9bK2l7zx3QCWT8OIH2kGhwEiIIxwb8W7ARiQiHAGRP4aiT+6Dut7l2kP6eHj8ldnhHANpMSnzF1G9MfMGVGBqTAJMDX9xpN4tjZq/d230APoNpwxhtSGwgAAAABJRU5ErkJggg==" />
                    </td>
                    <td>
                      Jl. Moh. Yamin No.9, Bataraguru, Kec. Wolio, Kota Bau-Bau
                    </td>
                  </tr>
                  <tr>
                    <td width="40px">
                      <img style={{ width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAg9JREFUaEPtmX1OwzAMxbOTMU4GnIxxMpClWgquHT9/VBBp/WfS1jrv92xnSXobm1+3zfWPJ8BfZ7AzA/cD5m2C4u8ex3dfx+d7F3gHAIl5GWOwWFQbQRFQCaYCQAPPbqPCtfs+siAZAHL6s6J28WwYJArguU5lQSL44trn8tL6RPKEICIAK/GvYwwWiyZnFQ+GQAGsweCBFlSl2AiANUDGdYvD6ivXIA9AE891Hi0ZpLRocpDT8dIoD+BbGdV7BhEazYQ55kqM5n6kbCQ8Cq6Vk1lKq6BSgFuPwtYsAIXRzFO1WgBwgEW9VAAoLGSgBSCbKeq+JgAtIfZElhJNGlTCvy4raNW9DgAtxqkHNQBZPhn3uwBkJWwH4JaRlgGXGpzoO8rwXwF43JqZKYAO57QeyAC4vaRRbw9wVQ9kMpAqoS4ATzDy+/YA7n9SqvMR65ruaQEgLdF1TJP+04LupANdzEX2AV3ipfuhxVzHcroKUlpOw+vxqkrjedjAK7eUWba2LaW1HLi6H0IHCd7sormhNlPW7uk5GosOi+WxynI/4gFQ/K0Pttig0vGfk51SbCQDHgT9ntl2ro7p4XgRgFU5MSQfrfOxozxep/u0Op+TBIvPLhG8dwSVfg7PcNEMzOI6QUKuzyIqAHNvbPmSTysVfuNIQHTJ16zc8PTZcjzfkYFKzZeffQKULSwG2D4DP+yVlTH7UP5KAAAAAElFTkSuQmCC" />
                    </td>
                    <td>
                      19.30 (Selesai Isya)

                    </td>
                  </tr>
                  <tr>
                    <td width="40px">
                      <img style={{ width: "20px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATJJREFUaEPtWW0OwiAM7W6mJ1NPpjfT1EiyINA+uq2QlV9L1tL3QdkHC00+lsnxUxDwdtDiwDsDj85lzf+WR4uuMVsBWPODgFVBa77KgQsR3X7rhq+PHg8iureKSj2Qq3Q0gVTvSkSvUvEWAWae1PcCnuoyeCbxN1oERlGfQU9PoLrlz+JAEPBu4k0ckLbcrUmqHnRIDwQB0KJwQKUAqCoSrqp/6h6QFNr7vvg6vTcA6/xBwKqgNd/sALKj9MRKBINAj6pITjggKeB939wDQSBriPy1RhIoHEB2lJ7Y3R3oAYXkBAGVAoikYKyq/qk/aEBB4XCzA08i8jgTqDEtrpbWEhqJQPWgo0WA1WcSI4wqTs3fNq+DjnQiw+oXT2eqP0xHkFyLQeOAdi6XuCDgIvuq6Af4PmMxJIcvjgAAAABJRU5ErkJggg==" />
                    </td>
                    <td>
                      06 Agustus 2023
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ padding: 15, background: '#dfdfdfd9', borderRadius: '0px 0px 10px 10px' }}>
              <table width="100%">
                <tbody style={{ fontWeight: "bold" }}>
                  <tr>
                    <td>Total Pembayaran</td>
                    <td style={{ textAlign: 'right' }}>{data["jumlah_bayar"]}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <div style={{ padding: 10, borderRadius: 6, background: '#ffffff', marginLeft: 15, marginRight: 15 }}>
          <div style={{ textAlign: 'center', fontWeight: "bold" }}>
            E Ticket
          </div>
          <br />
          <div style={{ textAlign: "center" }}>
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "40%" }}
              value={RC4Encrypt(id + "." + hasil)}
              viewBox={`0 0 256 256`}
            />
            <div style={{ opacity: "0.6" }}>

              #{id}

              <br />

              <span style={{ fontSize: "12px", fontWeight: "bold", color: "#1977fc" }}>Jangan malakukan Screen Capture Pada Tiket. Karna Kode QR akan selalu berubah2.</span>
            </div>
          </div>
          <br />
          <table style={{ color: "#1c3afd", fontWeight: "bold", fontSize: "17px" }}>
            <tbody><tr>
              <td>Nama </td>
              <td> : </td>
              <td> {data["nama"]}</td>
            </tr>
              <tr>
                <td>Jenis Kelamin </td>
                <td> : </td>
                <td> {data["jenis_kelamin"]}</td>
              </tr>

            </tbody>
          </table>
          <br />
          <div style={{ padding: "10px", background: "#f7ebdd", borderRadius: "10px" }}>
            Pesanan Anda
            <br />
            <br />

            <table width={"100%"}>
              <tbody>
                <tr style={{ fontWeight: "bold" }}>
                  <td>Nama Pesanan</td>
                  <td>Jumlah Item</td>
                </tr>
                {pesanan.map((list, index) => (
                  <tr>
                    <td>{list["nama_pesanan"]}</td>
                    <td>{list["jumlah"]} Item</td>
                  </tr>
                ))}
                <tr style={{ fontWeight: "bold" }}>
                  <td style={{ fontSize: "bold" }}>Keterangan</td>
                  <td>{data["keterangan"] !== "" ? data["keterangan"] : "-"}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div >

    </>
  );
}

export default App;
