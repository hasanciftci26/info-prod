using {InfoProdSrv as service} from './data-provider';

// ----------------------------------------------------------------------------------------------------------
// Annotation Table-Filter Section
// ----------------------------------------------------------------------------------------------------------

annotate service.Site with @(UI : {
    SelectionFields : [
        code_site,
        codepostal,
        pays
    ],
    LineItem        : [
        {
            $Type : 'UI.DataField',
            Value : id_site,
        },
        {
            $Type : 'UI.DataField',
            Value : code_site,
        },
        {
            $Type : 'UI.DataField',
            Value : site,
        },
        {
            $Type : 'UI.DataField',
            Value : voie,
        },
        {
            $Type : 'UI.DataField',
            Value : cpladresse,
        },
        {
            $Type : 'UI.DataField',
            Value : codepostal,
        }
    ]
});

annotate service.Mission with @(UI : {
    SelectionFields : [
        client,
        agence,
        dateDebut,
        description
    ],
    LineItem        : [
        {
            $Type : 'UI.DataField',
            Value : id_mission,
        },
        {
            $Type : 'UI.DataField',
            Value : agence,
        },
        {
            $Type : 'UI.DataField',
            Value : description,
        },
        {
            $Type : 'UI.DataField',
            Value : client,
        },
        {
            $Type : 'UI.DataField',
            Value : dateDebut,
        }
    ]
});

// ----------------------------------------------------------------------------------------------------------
// Annotation Restriction Section
// ----------------------------------------------------------------------------------------------------------

annotate service.Site with @Capabilities : {
    Deletable  : false,
    Insertable : false,
    Readable   : true,
    Updatable  : true
};

annotate service.Mission with @Capabilities : {
    Deletable  : false,
    Insertable : false,
    Readable   : true,
    Updatable  : true
};

// ----------------------------------------------------------------------------------------------------------
// Annotation Read-only Section
// ----------------------------------------------------------------------------------------------------------

annotate service.Site with {
    id_contact      @readonly;
    site            @readonly;
    id_site         @readonly;
    voie            @readonly;
    cpladresse      @readonly;
    codepostal      @readonly;
    pays            @readonly;
    ville           @readonly;
    nature          @readonly;
    type_inspection @readonly;
    nb_cave         @readonly;
    num_cave2       @readonly;
    surface         @readonly;
};

// ----------------------------------------------------------------------------------------------------------
// Annotation Label Section
// ----------------------------------------------------------------------------------------------------------

annotate service.Site with {
    id_site             @Common.Label : '{i18n>idSite}';
    code_site           @Common.Label : '{i18n>codeSite}';
    site                @Common.Label : '{i18n>libelleSite}';
    numero              @Common.Label : '{i18n>numero}';
    voie                @Common.Label : '{i18n>numeroEtVoie}';
    cpladresse          @Common.Label : '{i18n>complementAdresse}';
    ville               @Common.Label : '{i18n>ville}';
    codepostal          @Common.Label : '{i18n>codePostal}';
    pays                @Common.Label : '{i18n>pays}';
    longitude           @Common.Label : '{i18n>longitude}';
    latitude            @Common.Label : '{i18n>latitude}';
    nbpiece             @Common.Label : '{i18n>nombreDePiece}';
    id_contact          @Common.Label : '{i18n>idContact}';
    nomproprio          @Common.Label : '{i18n>nomDuProprietaire}';
    nomlocataire        @Common.Label : '{i18n>nomDuLocataire}';
    email               @Common.Label : '{i18n>email}';
    adresse_proprio     @Common.Label : '{i18n>adresseDuProprietaire}';
    port_locataire      @Common.Label : '{i18n>portableDuLocataire}';
    entree              @Common.Label : '{i18n>dateEntree}';
    sortie              @Common.Label : '{i18n>dateDeSortie}';
    edl_entrant         @Common.Label : '{i18n>etatDesLieuxEntrant}';
    edl_sortant         @Common.Label : '{i18n>etatDesLieuxSortant}';
    nom_residence       @Common.Label : '{i18n>nomResidence}';
    nature              @Common.Label : '{i18n>natureDhabitation}';
    type_inspection     @Common.Label : '{i18n>typeInspection}';
    usage               @Common.Label : '{i18n>typeUsage}';
    surface             @Common.Label : '{i18n>surface}';
    annee               @Common.Label : '{i18n>anneeDeConstruction}';
    batiment            @Common.Label : '{i18n>batiment}';
    digicode            @Common.Label : '{i18n>firstDigicode}';
    digicode2           @Common.Label : '{i18n>secondDigicode}';
    escalier            @Common.Label : '{i18n>escalier}';
    etage               @Common.Label : '{i18n>etage}';
    porte               @Common.Label : '{i18n>porte}';
    lotug               @Common.Label : '{i18n>numberLotUg}';
    nb_etage            @Common.Label : '{i18n>nombreEtage}';
    nb_ss_sol           @Common.Label : '{i18n>nombreDeSousSols}';
    nb_cave             @Common.Label : '{i18n>nombreDeCave}';
    num_cave            @Common.Label : '{i18n>numeroCave}';
    num_cave2           @Common.Label : '{i18n>autreNumeroCave}';
    num_box             @Common.Label : '{i18n>numeroBox}';
    emp_box             @Common.Label : '{i18n>emplacementBox}';
    emp_park            @Common.Label : '{i18n>numeroParking}';
    num_park            @Common.Label : '{i18n>emplacementParking}';
    chauffage_dpe       @Common.Label : '{i18n>typeDeChauffageDpe}';
    presence            @Common.Label : '{i18n>presence}';
    rep1                @Common.Label : '{i18n>representantOne}';
    rep2                @Common.Label : '{i18n>representantTwo}';
    prise_cle           @Common.Label : '{i18n>prendreLesCles}';
    nom_gardien         @Common.Label : '{i18n>nomGardien}';
    tel_gardien         @Common.Label : '{i18n>telephoneGardien}';
    rendre_cle          @Common.Label : '{i18n>rendreLesCles}';
    nom_gardien2        @Common.Label : '{i18n>nomGardienRendreCle}';
    tel_gardien2        @Common.Label : '{i18n>telephoneGardienRendreCle}';
    client_prescripteur @Common.Label : '{i18n>clientPrescripteur}';
    observation         @Common.Label : '{i18n>observation}';
    indication          @Common.Label : '{i18n>indication}';
};

annotate service.Mission with {
    id_mission     @Common.Label : '{i18n>idMission}';
    photoObs       @Common.Label : '{i18n>rapportsPhotosObs}';
    pagegardephoto @Common.Label : '{i18n>rapportsAvecPhoto}';
    agence         @Common.Label : '{i18n>agence}';
    client         @Common.Label : '{i18n>client}';
    num_contrat    @Common.Label : '{i18n>contrat}';
    description    @Common.Label : '{i18n>typeDeMission}';
    dateDebut      @Common.Label : '{i18n>dateDeDebut}';
    dateFin        @Common.Label : '{i18n>dateDeFin}';
};
