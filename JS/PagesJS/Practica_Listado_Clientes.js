console.log(`Funcionando Archivo:  Practica_Listado_Clientes`);

function exportToExcel() {

    try {
        let table = ContenedorTabla; // Asegúrate de que tu tabla tenga este ID
        let table = document.getElementById('ttabla'); // Asegúrate de que tu tabla tenga este ID
        let wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, "empleados.xlsx");
    } catch (error) }