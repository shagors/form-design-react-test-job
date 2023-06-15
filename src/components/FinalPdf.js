import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  DataTableCell,
} from "@david.kucsai/react-pdf-table";
import { Document, Image, Page, StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";
import Nature from '../img/flower.jpg'

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  author: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 15,
    textAlign: "center",
    color: "grey",
  },
  footer: {
    fontSize: 12,
    marginBottom:2,
    color: "black",
    alignItems: "baseline"
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const FinalPdf = ({ totalSum }) => {
    const {allItem, subTotalGrossWeight, subTotalNetWeight,subTotalPcsQty,subTotalVolume, subtotalPalletQty} = totalSum
  // console.log(totalSum);
  return (
    <Document>
      <Page style={styles.body}>
        <Image src={Nature} style={{width: "100%", height: "90px"}} />
        <Text style={styles.author}>THT-Space Electrical Company Ltd.</Text>
        <Text
          style={styles.header}
          fixed
          className="flex justify-between items-center">
          UTTRA EXPORT PROCESSING ZONE MSSFB # 4, UTTRA EPZ, NILPHAMRI, RANGPUR,
          BANGLADESH MOB: +8801760053135
        </Text>
        <Text style={styles.title}>
          PACKING LISTE DE COLISAGE / PACKING LIST NO. THT2301010 <br />
          Date: {new Date().toLocaleDateString()}
        </Text>
        <Text style={styles.subtitle}>Order Summery</Text>
        <Table>
          <TableHeader>
            <TableCell>Description Of Comodity</TableCell>
            <TableCell>Gross Weight</TableCell>
            <TableCell>Net Weight</TableCell>
            <TableCell>Volume</TableCell>
            <TableCell>Total Pallet Qty</TableCell>
            <TableCell>Total Pcs Qty</TableCell>
          </TableHeader>
            </Table>
            <Table>
            <TableBody>
            <TableBody>
                    <DataTableCell getContent={(r) => r.firstName}/>
                    <DataTableCell getContent={(r) => r.lastName}/>
                    <DataTableCell getContent={(r) => r.dob.toLocaleString()}/>
                    <DataTableCell getContent={(r) => r.country}/>
                    <DataTableCell getContent={(r) => r.phoneNumber}/>
                </TableBody>
            </TableBody>
          </Table>

          <Text style={styles.footer}>MAERSK & NO:</Text>
          <Text style={styles.footer}>MODEL NO: {totalSum.allItem}</Text>
          <Text style={styles.footer}>CARTON QUANTITY ON PALLET: {subTotalPcsQty} CTNS</Text>
          <Text style={styles.footer}>MADE IN BANGLADESH</Text>
          <Text style={styles.footer}>PALLET NO: {subtotalPalletQty}</Text>
      </Page>
    </Document>
  );
};

export default FinalPdf;
