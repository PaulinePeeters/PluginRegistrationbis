window.Asc.plugin.init = function() {
    // Obtenir le nom d'utilisateur de manière dynamique (si possible)
    var userName = "peeterspauline@hotmail.com"; // Remplace par le nom ou email de l'utilisateur

    var sheet = Api.GetActiveSheet();
    sheet.GetRange("A1:Z1000").SetOnClickHandler(function(cell) {
        cell.SetValue(userName);
    });
};

window.Asc.plugin.onButtonPressed = function() {
    var userName = "Pauline Peeters"; // Remplace par le nom ou email de l'utilisateur
    var sheet = Api.GetActiveSheet();
    sheet.GetRange("A1:Z1000").SetOnClickHandler(function(cell) {
        cell.SetValue(userName);
    });
};
