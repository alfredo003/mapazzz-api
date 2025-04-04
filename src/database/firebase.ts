import * as admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

const firebasek = {
  "type": "service_account",
  "project_id": "mapzzz-62a4f",
  "private_key_id": "8d06dafbeb7e9502518db41f9bd67e31a8517585",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzwdKQ/UVp9kb4\nQu4pwyz3Ofjk02WxXjHD4JWz5Oo6i6G9Vc3MeDDk5xW5FrXO3nAkuEiNWTDeu7nK\nIygYtg/YGamuy0mtEvv0xYWDQdAmVgbULB8GPb/QR5xOqTtVPUr7dtIhscbphWtE\n2o8bfVUJESnRLBTmwLFQM5YKIpD6k4b5RoclYBRVz0pnR707FXVEQ4stXBdKjgEO\nSqV1injkDPRSc7Q+epG/tr2Av1G4KXeToak7vNakAUgFOaPTv/w+E0MBbTwcjHTI\nEFVBKtof5/eJIXi+lS1iYRFySmoWQ+n8ZUfotkwtaz2ypa+/1SNpCVxpLbuE8tr/\no3SX/e1FAgMBAAECggEACMbBEN6oxbJmRyc/aQ8UMjLkpclzeNw0Ok/MB1c5H2gj\nWrLmhCHnIznsG9gRwtql54kO08XjxrAsM0QRqFk1P1QLbpMS0w4u+oWtTdoH/2Mq\nXLAVyLB5ncHtTgLhuHjwYQQtYMNFBrBCqz8vhwRQw0tQ+xs3nweP8K5AGFkVMoKt\n3A2oAxu2gCm0ohTkLsxZrKZIhCWhLjKiHRtqQubjIMt/YmQVT7gkXFJXJ0JyOUJY\nbzjx8nWmkqBomRS3U0RZps1U5snUIqgWrfMA0KQ8VKCM9ygJS+i/8MFkiEZwnPiT\nxeXFCNkajOaxuiCFvdXefYLXXmeGsiclPyxUvWGQgQKBgQDvr96JpyA8yzDMn5IG\n0PKLD0yXoAd8uIokHevkKWzjPbke59MOtCHhC9oU564/PAcva0556/H08FipPcjc\njytYG/7uLhvhcvFs0eu13AgyQtvTx14hqxOM7wwlbcRXbMNbJHuapVWLnEwL+aQb\n+S3yMImbDQSzCAAYGo91JxBHxQKBgQC//cdus2pgZvCYFEYaSYf8JfeEpiQIpxyU\nfnqblsodmxOYJAEtkRxW0Yc2wtJtvFA63v0k/55Qyc1I/kJ7dpxJyzvl7VyFaDPb\nLMrvOs7Z9Va888lspGn6GNumQkAyRY8jvK/wDxpQmQXcq5rrdEceY4kvh2l9e57x\nWlxuMVvngQKBgDfRPwPTdcBymTSt3HXV5wXXVEDjNZsn5pOunCaQNxlcYGYAGriL\n3m/oMKs5oOx88Ddsx+PAvKIL7rnK96HVfYSRUHbrKfcAq5Rp9nhte0MpKsRQ42z3\nyB/D85Ir09OAMqZhAp/q7NcMWPFY+4zAJKEICKOhDn0a2drDJLFlnXb5AoGANBnx\nmigUUS7+UbcGwzF7NsEy54uSscpv5hhgu4JzPQ+NhLcYnr4He8QGtqSuKFt3RlKn\nTfgUhYYOMKXXctvgU+JUUfRVLFr3353LQJqr8dgzfrmFyvbfT6CZUwgdlcbsrl0R\nPctLb93nCliDhSwb9LI8U2qjBQucOZE1Di5U64ECgYAwimRGnzdqDB7i6DJc5C96\nr2nQRp/e35ZUosadOQ7n61y58g27ZFoyzZf8pkjRpaQ4llWa82Y3jciaqdn4VjK/\nPtf0lXKH5AxCkdvOdS2O7p3ac9/eWaRFm5UiuiqHrQa2A2efF1ox8hiZudKs4ctX\n/1008vWSakh2Lt6OnhsXkg==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-fbsvc@mapzzz-62a4f.iam.gserviceaccount.com",
  "client_id": "100181765236517741848",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40mapzzz-62a4f.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

const serviceAccount = firebasek as admin.ServiceAccount; 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const connectiondb = admin.firestore(); 

export  default connectiondb;