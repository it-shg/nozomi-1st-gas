function copyAndPasteValue() {
  // コピー元のスプレッドシートとシートの指定
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('スーパー・コート希（のぞみ）');
  
  // コピー元のセルの値を取得
  var b5Value = sourceSheet.getRange('B5').getValue();
  var c5Value = sourceSheet.getRange('C5').getValue();
  var c7Value = sourceSheet.getRange('C7').getValue();
  Logger.log(c7Value);
  var c16Value = sourceSheet.getRange('B16').getValue();
  var c20Value = sourceSheet.getRange('B20').getValue();
  var c22Value = sourceSheet.getRange('B22').getValue();
  var c25Value = sourceSheet.getRange('B25').getValue();
  //var c0Value = sourceSheet.getRange('').getValue();
  
  
  // コピー先のスプレッドシートとシートの指定
  var destinationSpreadsheet = SpreadsheetApp.openById('1iB6NG2FkrqraIczfeBSRJpekNGM5q5LR_RWib-vNDz4');
  var destinationSheet = destinationSpreadsheet.getSheetByName('T_希');
  
  // 既に入力されている最終行を取得し、次の行を計算
  var lastRow = destinationSheet.getLastRow();
  var nextRow = lastRow + 1;

  // コピー先の空き行に値を貼り付ける
  destinationSheet.getRange(nextRow, 2).setValue(c7Value);
  destinationSheet.getRange(nextRow, 3).setValue(b5Value);
  destinationSheet.getRange(nextRow, 4).setValue(c5Value);
  destinationSheet.getRange(nextRow, 7).setValue(c16Value);
  destinationSheet.getRange(nextRow, 8).setValue(c20Value);
  destinationSheet.getRange(nextRow, 9).setValue(c22Value);
  destinationSheet.getRange(nextRow, 10).setValue(c25Value);
  
  
  

  
   
}

function clearSourceCell() {
  // コピー元のスプレッドシートとシートの指定
  var sourceSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('スーパー・コート希（のぞみ）');
  
  // コピー元のセルをクリア
  sourceSheet.getRange('B5').clearContent();
}
