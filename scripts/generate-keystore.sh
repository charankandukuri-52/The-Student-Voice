#!/bin/bash

# Create directory for keystore if it doesn't exist
mkdir -p src/main/resources/keystore

# Generate keystore
keytool -genkeypair \
  -alias tomcat \
  -keyalg RSA \
  -keysize 2048 \
  -storetype PKCS12 \
  -keystore src/main/resources/keystore/keystore.p12 \
  -validity 3650 \
  -storepass password \
  -dname "CN=localhost, OU=The Student Voice, O=The Student Voice, L=Unknown, ST=Unknown, C=IN"

echo "Keystore generated successfully at src/main/resources/keystore/keystore.p12" 