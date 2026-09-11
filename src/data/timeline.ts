export type TimelineEra = {
  id: string;
  label: string;
  years: string;
  summary: string;
};

export type TimelineEvent = {
  year: string;
  title: string;
  note: string;
  era: TimelineEra["id"];
};

export const eras: TimelineEra[] = [
  {
    id: "founding",
    label: "奠基",
    years: "1943–1969",
    summary: "计算、逻辑与“机器能否思维”的问题被正式提出；符号主义与早期联结主义几乎同时起步。",
  },
  {
    id: "winters",
    label: "冬天与专家系统",
    years: "1970–1997",
    summary: "期望、算力与数据之间的落差带来两次寒潮；规则系统一度进入工业，又迅速暴露维护成本。",
  },
  {
    id: "deep",
    label: "深度学习",
    years: "2006–2016",
    summary: "表示学习、大数据与 GPU 训练把神经网络从边缘拉回中心，图像与博弈成为最醒目的演示场。",
  },
  {
    id: "attention",
    label: "注意力与大模型",
    years: "2017–",
    summary: "Transformer 统一了序列建模的主流路径；规模、数据与对齐方法共同塑造了当代语言模型。",
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: "1943",
    title: "McCulloch–Pitts 神经元",
    note: "Warren McCulloch 与 Walter Pitts 用逻辑演算描述神经元网络，把“神经活动”写成可计算的阈值单元。这是联结主义最早的数学原型之一。",
    era: "founding",
  },
  {
    year: "1950",
    title: "图灵：《计算机器与智能》",
    note: "Alan Turing 在 Mind 杂志提出模仿游戏（后来常称图灵测试），把“机器能否思维”从哲学口号改写成可观察的对话行为。",
    era: "founding",
  },
  {
    year: "1956",
    title: "达特茅斯会议",
    note: "John McCarthy、Marvin Minsky、Nathaniel Rochester 与 Claude Shannon 发起暑期研究计划，并使用 artificial intelligence 一词。会议并未“发明”智能，但给这个领域起了沿用至今的名字。",
    era: "founding",
  },
  {
    year: "1958",
    title: "Rosenblatt 的感知机",
    note: "Frank Rosenblatt 提出 Perceptron，用可学习的权重做模式分类，并在硬件上做过演示。它证明了学习可以是统计与试错，而不只是手工规则。",
    era: "founding",
  },
  {
    year: "1966",
    title: "ELIZA",
    note: "Joseph Weizenbaum 的 ELIZA 用模式匹配模拟罗杰斯式心理咨询。它很快暴露出一种持久的错觉：流畅的对话并不等于理解。",
    era: "founding",
  },
  {
    year: "1969",
    title: "《Perceptrons》",
    note: "Minsky 与 Papert 分析了单层感知机的能力边界。这本书常被简化成“杀死了神经网络”，更准确的说法是：它让人们看清单层线性模型做不到什么。",
    era: "founding",
  },
  {
    year: "1973",
    title: "Lighthill 报告",
    note: "英国的 Lighthill 评估对 AI 的实际进展表示失望，随后研究经费收缩。这是第一次“AI 寒冬”最常被引用的公共节点之一。",
    era: "winters",
  },
  {
    year: "1980",
    title: "专家系统进入工业",
    note: "以 DEC 的 XCON（R1）等系统为代表，规则库开始承担配置与诊断任务。知识工程证明了领域规则可以创造价值，也证明了规则会迅速变得脆弱、昂贵。",
    era: "winters",
  },
  {
    year: "1986",
    title: "反向传播被重新讲清楚",
    note: "Rumelhart、Hinton 与 Williams 在 Nature 发表用误差反传学习内部表示的工作。算法思想更早存在，但这篇文章让多层网络重新成为可讨论的学习机器。",
    era: "winters",
  },
  {
    year: "1989",
    title: "LeNet 与手写数字",
    note: "Yann LeCun 等人把卷积结构用于手写邮政编码识别。卷积、权值共享与局部感受野，后来成为视觉深度学习的标准零件。",
    era: "winters",
  },
  {
    year: "1997",
    title: "Deep Blue 击败卡斯帕罗夫",
    note: "IBM Deep Blue 在正式比赛中战胜国际象棋世界冠军 Garry Kasparov。它主要依靠搜索与专用硬件，而不是后来意义上的表示学习；公共叙事却因此把“机器智能”再次推到台前。",
    era: "winters",
  },
  {
    year: "2006",
    title: "深度信念网与表示学习",
    note: "Hinton、Osindero 与 Teh 展示深度信念网络可以用逐层预训练有效训练。“深度学习”作为可工作的研究纲领，在这个阶段重新站稳。",
    era: "deep",
  },
  {
    year: "2012",
    title: "AlexNet 与 ImageNet",
    note: "Krizhevsky、Sutskever 与 Hinton 的 AlexNet 在 ImageNet 竞赛中显著拉开与传统视觉系统的差距。大数据、GPU 与 ReLU 等工程选择，比任何单一理论口号都更关键。",
    era: "deep",
  },
  {
    year: "2014",
    title: "注意力机制与 GAN",
    note: "Bahdanau 等人把注意力引入神经机器翻译，让模型在解码时回看源序列。同年 Goodfellow 等人提出生成对抗网络，生成建模开始有一种对抗式训练语言。",
    era: "deep",
  },
  {
    year: "2016",
    title: "AlphaGo 对弈李世石",
    note: "DeepMind 的 AlphaGo 在公开比赛中战胜李世石。策略网络、价值网络与蒙特卡洛树搜索的组合说明：学习出的评价函数可以改变经典搜索的上限。",
    era: "deep",
  },
  {
    year: "2017",
    title: "Attention Is All You Need",
    note: "Vaswani 等人提出 Transformer：用自注意力替代循环结构做序列转导。它首先服务机器翻译，随后成为语言、视觉、多模态模型的共用骨架。",
    era: "attention",
  },
  {
    year: "2018",
    title: "BERT 与 GPT",
    note: "Devlin 等人的 BERT 用双向掩码语言模型做预训练；OpenAI 的 GPT 则把自回归语言模型推向迁移学习。预训练—微调从此成为默认工作流。",
    era: "attention",
  },
  {
    year: "2020",
    title: "GPT-3 与上下文学习",
    note: "Brown 等人描述 GPT-3：在足够规模下，模型可以仅靠提示完成多种任务。这把“训练一个新模型”部分改写成“给模型一段说明”。",
    era: "attention",
  },
  {
    year: "2022",
    title: "对话接口进入公共生活",
    note: "ChatGPT 于 2022 年 11 月上线，把指令微调与人类反馈强化学习之后的语言模型变成大众可试用的产品。同年开源扩散模型也让图像生成进入更广泛的实验。",
    era: "attention",
  },
  {
    year: "2023",
    title: "GPT-4、LLaMA 与开源权重",
    note: "GPT-4 展示更强的综合能力；Meta 发布 LLaMA，随后开源权重路线迅速展开。研究、产品和公共讨论第一次大规模重叠。",
    era: "attention",
  },
  {
    year: "2024",
    title: "推理型系统出现",
    note: "以 OpenAI o1 等系统为代表，厂商开始把更多计算放在测试时的多步推理上。规模不再只发生在预训练，也发生在回答一个问题所花的思考时间。",
    era: "attention",
  },
  {
    year: "2025",
    title: "开源推理模型进入视野",
    note: "DeepSeek-R1 等开源推理模型让“如何公开训练与评价长链推理”成为可复现的研究题目，而不只是封闭产品的演示。",
    era: "attention",
  },
];
