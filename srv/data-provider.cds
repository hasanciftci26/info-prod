using {Agora.infoprod as infoprod} from '../db/data-models';

service InfoProdSrv {
    entity Site    as projection on infoprod.Site;
    entity Mission as projection on infoprod.Mission;
};
