

function glyphSettings()
{
    var out = [

        {gene: 'Aldoc',          taxonomy: 'in_general',  glyphSymbol: '+',  glyphName: 'plus'},
        {gene: 'Bcl11b',         taxonomy: 'in_general',  glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Cadps2',         taxonomy: 'in_general',  glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Calb1',          taxonomy: 'in_general',  glyphSymbol: '^',  glyphName: 'triangleUp'},
        {gene: 'Calb2',          taxonomy: 'in_general',  glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Cck',            taxonomy: 'in_general',  glyphSymbol: '<',  glyphName: 'triangleLeft'},
        {gene: 'Cdh13',          taxonomy: 'in_general',  glyphSymbol: 'p',  glyphName: 'star5'},
        {gene: 'Chodl',          taxonomy: 'in_general',  glyphSymbol: 'h',  glyphName: 'star6'},
        {gene: 'Chrm2',          taxonomy: 'sst',         glyphSymbol: '+',  glyphName: 'plus'},
        {gene: 'Cnr1',           taxonomy: 'sst',         glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'Col25a1',        taxonomy: 'sst',         glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Cort',           taxonomy: 'sst',         glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Cox6a2',         taxonomy: 'sst',         glyphSymbol: 'x',  glyphName: 'cross'},
        {gene: 'Cplx2',          taxonomy: 'sst',         glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Cpne5',          taxonomy: 'sst',         glyphSymbol: 'd',  glyphName: 'diamond'},
        {gene: 'Crh',            taxonomy: 'sst',         glyphSymbol: '^',  glyphName: 'triangleUp'},
        {gene: 'Crhbp',          taxonomy: 'sst',         glyphSymbol: '<',  glyphName: 'triangleLeft'},
        {gene: 'Cryab',          taxonomy: 'sst',         glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Cxcl14',         taxonomy: 'sst',         glyphSymbol: 'p',  glyphName: 'star5'},
        {gene: 'Enpp2',          taxonomy: 'pvalb',       glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'Gabrd',          taxonomy: 'pvalb',       glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Gad1',           taxonomy: 'pvalb',       glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Gda',            taxonomy: 'pvalb',       glyphSymbol: 'd',  glyphName: 'diamond'},
        {gene: 'Grin3a',         taxonomy: 'pvalb',       glyphSymbol: 'v',  glyphName: 'triangleDown'},
        {gene: 'Hapln1',         taxonomy: 'pvalb',       glyphSymbol: 'p',  glyphName: 'star5'},
        {gene: 'Htr3a',          taxonomy: 'ngf',         glyphSymbol: '+',  glyphName: 'plus'},
        {gene: 'Id2',            taxonomy: 'ngf',         glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'Kcnk2',          taxonomy: 'ngf',         glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Kctd12',         taxonomy: 'ngf',         glyphSymbol: 'x',  glyphName: 'cross'},
        {gene: 'Kit',            taxonomy: 'ngf',         glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Lamp5',          taxonomy: 'ngf',         glyphSymbol: 'd',  glyphName: 'diamond'},
        {gene: 'Lhx6',           taxonomy: 'ngf',         glyphSymbol: '^',  glyphName: 'triangleUp'},
        {gene: 'Ndnf',           taxonomy: 'ngf',         glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Neurod6',        taxonomy: 'ngf',         glyphSymbol: 'h',  glyphName: 'star6'},
        {gene: 'Nos1',           taxonomy: 'cxcl14',      glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'Nov',            taxonomy: 'cxcl14',      glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Npy',            taxonomy: 'cxcl14',      glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Npy2r',          taxonomy: 'cxcl14',      glyphSymbol: 'd',  glyphName: 'diamond'},
        {gene: 'Nr4a2',          taxonomy: 'cxcl14',      glyphSymbol: 'h',  glyphName: 'star6'},
        {gene: 'Nrn1',           taxonomy: 'cnr1',        glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'Ntng1',          taxonomy: 'cnr1',        glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Pcp4',           taxonomy: 'cnr1',        glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Pde1a',          taxonomy: 'cnr1',        glyphSymbol: 'x',  glyphName: 'cross'},
        {gene: 'Penk',           taxonomy: 'cnr1',        glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Plcxd2',         taxonomy: 'cnr1',        glyphSymbol: '^',  glyphName: 'triangleUp'},
        {gene: 'Plp1',           taxonomy: 'cnr1',        glyphSymbol: 'v',  glyphName: 'triangleDown'},
        {gene: 'Pnoc',           taxonomy: 'cnr1',        glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Prkca',          taxonomy: 'cnr1',        glyphSymbol: '<',  glyphName: 'triangleLeft'},
        {gene: 'Pthlh',          taxonomy: 'cnr1',        glyphSymbol: 'p',  glyphName: 'star5'},
        {gene: 'Pvalb',          taxonomy: 'cnr1',        glyphSymbol: 'h',  glyphName: 'star6'},
        {gene: 'Rab3c',          taxonomy: 'vip',         glyphSymbol: '+',  glyphName: 'plus'},
        {gene: 'Rasgrf2',        taxonomy: 'vip',         glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'Reln',           taxonomy: 'vip',         glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Rgs10',          taxonomy: 'vip',         glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Rgs12',          taxonomy: 'vip',         glyphSymbol: 'x',  glyphName: 'cross'},
        {gene: 'Rgs4',           taxonomy: 'vip',         glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Satb1',          taxonomy: 'vip',         glyphSymbol: '^',  glyphName: 'triangleUp'},
        {gene: 'Sema3c',         taxonomy: 'vip',         glyphSymbol: 'v',  glyphName: 'triangleDown'},
        {gene: 'Serpini1',       taxonomy: 'vip',         glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Slc17a8',        taxonomy: 'vip',         glyphSymbol: 'p',  glyphName: 'star5'},
        {gene: 'Slc6a1',         taxonomy: 'less_active', glyphSymbol: '+',  glyphName: 'plus'},
        {gene: 'Snca',           taxonomy: 'less_active', glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Sncg',           taxonomy: 'less_active', glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Sst',            taxonomy: 'less_active', glyphSymbol: 'd',  glyphName: 'diamond'},
        {gene: 'Synpr',          taxonomy: 'less_active', glyphSymbol: 'v',  glyphName: 'triangleDown'},
        {gene: 'Tac1',           taxonomy: 'less_active', glyphSymbol: '^',  glyphName: 'triangleUp'},
        {gene: 'Tac2',           taxonomy: 'less_active', glyphSymbol: '<',  glyphName: 'triangleLeft'},
        {gene: 'Th',             taxonomy: 'less_active', glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Thsd7a',         taxonomy: 'less_active', glyphSymbol: 'p',  glyphName: 'star5'},
        {gene: 'Trp53i11',       taxonomy: 'less_active', glyphSymbol: 'h',  glyphName: 'star6'},
        {gene: 'Vip',            taxonomy: 'pc_or_in',    glyphSymbol: '+',  glyphName: 'plus'},
        {gene: 'Wfs1',           taxonomy: 'pc_or_in',    glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'Yjefn3',         taxonomy: 'pc_or_in',    glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Ache',           taxonomy: 'pc_or_in',    glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Cartpt',         taxonomy: 'pc_or_in',    glyphSymbol: 'x',  glyphName: 'cross'},
        {gene: 'Chat',           taxonomy: 'pc_or_in',    glyphSymbol: 'x',  glyphName: 'cross'},
        {gene: 'Gal',            taxonomy: 'pc_or_in',    glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Gnrh1',          taxonomy: 'pc_or_in',    glyphSymbol: 'd',  glyphName: 'diamond'},
        {gene: 'Grm1',           taxonomy: 'pc_or_in',    glyphSymbol: '^',  glyphName: 'triangleUp'},
        {gene: 'Grm8',           taxonomy: 'pc_or_in',    glyphSymbol: 'v',  glyphName: 'triangleDown'},
        {gene: 'Hcn1',           taxonomy: 'pc_or_in',    glyphSymbol: '<',  glyphName: 'triangleLeft'},
        {gene: 'Htr2c',          taxonomy: 'pc_or_in',    glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Lhx8',           taxonomy: 'pc_or_in',    glyphSymbol: 'h',  glyphName: 'star6'},
        {gene: 'Meis2',          taxonomy: 'pc',          glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Napb',           taxonomy: 'pc',          glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Ndrg4',          taxonomy: 'pc',          glyphSymbol: '+',  glyphName: 'plus'},
        {gene: 'Nts',            taxonomy: 'pc',          glyphSymbol: 'x',  glyphName: 'cross'},
        {gene: 'Peg10',          taxonomy: 'pc',          glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'S100a10',        taxonomy: 'pc',          glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Scgn',           taxonomy: 'pc',          glyphSymbol: 'd',  glyphName: 'diamond'},
        {gene: 'Slc17a6',        taxonomy: 'pc',          glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Slc17a7',        taxonomy: 'pc',          glyphSymbol: 'v',  glyphName: 'triangleDown'},
        {gene: 'Slc18a3',        taxonomy: 'pc',          glyphSymbol: '<',  glyphName: 'triangleLeft'},
        {gene: 'Slc32a1',        taxonomy: 'pc',          glyphSymbol: '^',  glyphName: 'triangleUp'},
        {gene: 'Slc5a7',         taxonomy: 'pc',          glyphSymbol: 'p',  glyphName: 'star5'},
        {gene: 'Sox6',           taxonomy: 'pc',          glyphSymbol: 'h',  glyphName: 'star6'},
        {gene: 'Sp8',            taxonomy: 'pc2',         glyphSymbol: '+',  glyphName: 'plus'},
        {gene: 'Spp1',           taxonomy: 'pc2',         glyphSymbol: 'o',  glyphName: 'circle'},
        {gene: 'Stxbp1',         taxonomy: 'pc2',         glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Syt2',           taxonomy: 'pc2',         glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Tacr2',          taxonomy: 'pc2',         glyphSymbol: 's',  glyphName: 'square'},
        {gene: 'Tacr3',          taxonomy: 'pc2',         glyphSymbol: 'v',  glyphName: 'triangleDown'},
        {gene: 'Tcf7l2',         taxonomy: 'pc2',         glyphSymbol: '>',  glyphName: 'triangleRight'},
        {gene: 'Vgf',            taxonomy: 'non_neuron',  glyphSymbol: '*',  glyphName: 'asterisk'},
        {gene: 'Zic1',           taxonomy: 'non_neuron',  glyphSymbol: '.',  glyphName: 'point'},
        {gene: 'Zic4',           taxonomy: 'non_neuron',  glyphSymbol: 's',  glyphName: 'square'},


        {gene: 'Generic',       taxonomy: 'generic',     glyphSymbol: 'o',  glyphName: 'circle'},

        ];

    return out
}

//create color ramp.
function glyphColor(y) {
    return y === 'non_neuron' ? '#FFFFFF' : //hsv: [0 0 1]);
        y === 'pc_or_in' ? '#407F59' :      //hsv: [.4 .5 .5]);
            y === 'less_active' ? '#96B38F' :   //hsv: [.3 .2 .7]);
                y === 'pc' ? '#00FF00' :            //hsv: [1/3 1 1]);
                    y === 'pc2' ? '#44B300' :           //hsv: [.27 1 .7]);
                        y === 'in_general' ? '#0000FF' :    //hsv: [2/3 1 1]);
                            y === 'sst' ? '#00B3FF' :           //hsv: [.55 1 1]);
                                y === 'pvalb' ? '#5C33FF' :         //hsv: [.7 .8 1]);
                                    y === 'ngf' ? '#FF00E6' :           //hsv: [.85 1 1]);
                                        y === 'cnr1' ? '#FF0000' :          //hsv: [ 1 1 1]);
                                            y === 'vip' ? '#FFC700' :           //hsv: [.13 1 1]);
                                                y === 'cxcl14' ? '#995C00' :        //hsv: [.1 1 .6]);
                                                    '#FD6A02';
}