var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4770)==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����72�����Ի�ø��ཱ���");
			qm.forceCompleteQuest(4770);
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b71#k����");
			}
		} else if (status == 1) { //����Ѥ���龰����				
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v5390001# x 1��");
			qm.gainItem(5390001, 1);
			qm.forceCompleteQuest(4770);	
			qm.dispose();
		} 
	}
}