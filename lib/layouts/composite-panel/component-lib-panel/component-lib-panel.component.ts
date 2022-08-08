import { CdkDragExit} from '@angular/cdk/drag-drop';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BasicCompositePanel } from '../basic-composite-panel';
import { DragAction, IEditorFormlyField, ItemDragData, WidgetOption } from '../../../editor.types';
import { FormlyEditorService } from '../../../formly-editor.service';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'edt-component-lib-panel',
  templateUrl: './component-lib-panel.component.html',
  host: { '[class.edt-component-lib-panel]': 'true' }
})
export class ComponentLibPanelComponent extends BasicCompositePanel implements OnInit {
  static override readonly PANEL_INFO = {
    title: '组件库',
    icon: 'appstore',
    sort: 1
  };

  dropEnter = false;

  panels: PanelOption[] = [
    {
      active: true,
      disabled: false,
      label: '基础控件',
      widgets: [
        {
          icon: 'icon-input',
          label: '单行文本',
          type: 'input',
          props: { label: '单行文本' }
        },
        {
          icon: 'icon-textarea',
          label: '多行文本',
          type: 'textarea',
          props: { label: '多行文本', nzMaxCharacterCount: 100 }
        },
        { icon: 'icon-input-number', label: '数字输入框', type: 'number', props: { label: '数字' } },
        {
          icon: 'icon-auto-complete',
          label: '自动完成',
          type: 'autocomplete',
          props: { label: '自动完成' }
        },
        {
          icon: 'icon-radioactive',
          label: '单选框组',
          type: 'radio',
          properties: [],
          props: {
            options: [
              { label: '值一', value: 1 },
              { label: '值二', value: 2 },
              { label: '值三', value: 3 }
            ]
          }
        },
        {
          icon: 'icon-check_box-24px',
          label: '多选框组',
          type: 'checkbox',
          defaultValue: 2,
          props: {
            label: '多选框组',
            options: [
              { label: '值一', value: 1 },
              { label: '值二', value: 2 },
              { label: '值三', value: 3 }
            ]
          }
        },
        {
          icon: 'icon-xialakuang',
          label: '下拉选择框',
          type: 'select',
          props: {
            label: '下拉选择框',
            options: [
              { label: '英语', value: 1 },
              { label: '数学', value: 2 },
              { label: '物理', value: 3 }
            ]
          }
        },
        {
          icon: 'icon-shijianxuanzeqi',
          label: '时间选择器',
          type: 'time-picker',
          props: { label: '时间选择器' }
        },
        {
          icon: 'icon-riqixuanzeqibeifen',
          label: '日期选择器',
          type: 'date-picker',
          props: { label: '日期选择器' }
        },
        { icon: 'icon-calendar', label: '日历', type: 'date-picker', props: { label: '日历' } },
        { icon: 'icon-pingfen', label: '评分', type: 'rate' },
        { icon: 'icon-switch', label: '开关', type: 'switch', props: { label: '开关' } },
        { icon: 'icon-slider', label: '滑块', type: 'slider' },
        { icon: 'icon-tag', label: '标签', type: 'tag' },
        { icon: 'icon-wenzi', label: '文字', type: 'input' },
        { icon: 'icon-HTML', label: 'HTML', type: 'input' },
        { icon: 'icon-anniu', label: '按钮', type: 'button', props: { text: '按钮' } },
        { icon: 'icon-button-group', label: '按钮组', type: 'button-group' },
        { icon: 'icon-lianjie', label: '文字链接', type: 'input' },
        { icon: 'icon-jilianxuanze', label: '级联选择器', type: 'input' },
        { icon: 'icon-m-buzhou', label: '步骤条', type: 'input' },
        {
          icon: 'icon-fengexian',
          label: '分割线',
          type: 'divider',
          props: {
            nzOrientation: 'left'
          },
          fieldGroup: [
            {
              type: 'formly-group',
              fieldGroup: [],
              canHaveChildren: true,
              childrenPath: 'fieldGroup'
            }
          ]
        },
        { icon: 'icon-shuzi', label: '统计', type: 'divider' },
        { icon: 'icon-wenjianshangchuan', label: '文件上传', type: 'upload' },
        { icon: 'icon-tupian', label: '图片', type: 'input' },
        { icon: 'icon-table', label: '表格', type: 'table' },
        { icon: 'icon-m-chuansuokuang', label: '穿梭框', type: 'tree' },
        { icon: 'icon-tree-table', label: '树形控件', type: 'tree' },
        { icon: 'icon-input-combotree', label: '树选择', type: 'tree-select' },
        { icon: 'icon-shijianzhou', label: '时间轴', type: 'tree-select' },
        { icon: 'icon-applyzhongqi', label: '进度条', type: 'tree-select' },
        { icon: 'icon-tiji', label: '提及', type: 'tree-select' },
        { icon: 'icon-shipin1', label: '视频', type: 'tree' },
        { icon: 'icon-yinpin', label: '音频', type: 'tree-select' },
        { icon: 'icon-lunbotu', label: '轮播图', type: 'tree-selec' },
        { icon: 'icon-emoji', label: '图标', type: 'tree-select' }
      ]
    },
    {
      active: true,
      disabled: false,
      label: '高级控件',
      widgets: [
        {
          icon: 'icon-zhuzhuangtu',
          label: '图表-柱状图',
          type: 'echarts',
          props: {
            options: {
              loading: true,
              color: ['#3398DB'],
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: [
                {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  axisTick: {
                    alignWithLabel: true
                  }
                }
              ],
              yAxis: [
                {
                  type: 'value'
                }
              ],
              series: [
                {
                  name: 'Counters',
                  type: 'bar',
                  barWidth: '60%',
                  data: [10, 52, 200, 334, 390, 330, 220]
                }
              ]
            } as any
          }
        },
        {
          icon: 'icon-tiaoxingtu',
          label: '图表-条形图',
          type: 'echarts',
          props: {
            options: {
              title: {
                text: '世界人口总量'
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: {
                  type: 'shadow'
                }
              },
              legend: {},
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
              },
              yAxis: {
                type: 'category',
                data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
              },
              series: [
                {
                  name: '2011',
                  type: 'bar',
                  data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                  name: '2012',
                  type: 'bar',
                  data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
              ]
            } as any
          }
        },
        {
          icon: 'icon-tubiao-zhexiantu',
          label: '图表-折线图',
          type: 'echarts',
          props: {
            options: {
              title: {
                text: 'Temperature Change in the Coming Week'
              },
              tooltip: {
                trigger: 'axis'
              },
              legend: {},
              toolbox: {
                show: true,
                feature: {
                  dataZoom: {
                    yAxisIndex: 'none'
                  },
                  dataView: { readOnly: false },
                  magicType: { type: ['line', 'bar'] },
                  restore: {},
                  saveAsImage: {}
                }
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter: '{value} °C'
                }
              },
              series: [
                {
                  name: 'Highest',
                  type: 'line',
                  data: [10, 11, 13, 11, 12, 12, 9],
                  markPoint: {
                    data: [
                      { type: 'max', name: 'Max' },
                      { type: 'min', name: 'Min' }
                    ]
                  },
                  markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                  }
                },
                {
                  name: 'Lowest',
                  type: 'line',
                  data: [1, -2, 2, 5, 3, 2, 0],
                  markPoint: {
                    data: [
                      {
                        name: '周最低',
                        value: -2,
                        xAxis: 1,
                        yAxis: -1.5
                      }
                    ]
                  },
                  markLine: {
                    data: [
                      { type: 'average', name: 'Avg' },
                      [
                        {
                          symbol: 'none',
                          x: '90%',
                          yAxis: 'max'
                        },
                        {
                          symbol: 'circle',
                          label: {
                            position: 'start',
                            formatter: 'Max'
                          },
                          type: 'max',
                          name: '最高点'
                        }
                      ]
                    ]
                  }
                }
              ]
            } as any
          }
        },
        {
          icon: 'icon-mianjitu',
          label: '图表-面积图',
          type: 'echarts',
          props: {
            options: {
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [
                {
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line',
                  areaStyle: {}
                }
              ]
            } as any
          }
        },
        {
          icon: 'icon-bingtu',
          label: '图表-饼图',
          type: 'echarts',
          props: {
            options: {
              title: {
                text: 'Referer of a Website',
                subtext: 'Fake Data',
                left: 'center'
              },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                orient: 'vertical',
                left: 'left'
              },
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: '50%',
                  data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                  ],
                  emphasis: {
                    itemStyle: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            } as any
          }
        },
        {
          icon: 'icon-huanxingtu',
          label: '图表-环形图',
          type: 'echarts',
          props: {
            options: {
              tooltip: {
                trigger: 'item'
              },
              legend: {
                top: '5%',
                left: 'center'
              },
              series: [
                {
                  name: 'Access From',
                  type: 'pie',
                  radius: ['40%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    label: {
                      show: true,
                      fontSize: '40',
                      fontWeight: 'bold'
                    }
                  },
                  labelLine: {
                    show: false
                  },
                  data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                  ]
                }
              ]
            } as any
          }
        },
        {
          icon: 'icon-baifenbihuanxingtu',
          label: '图表-百分比环',
          type: 'echarts',
          props: {
            options: {
              title: {
                text: '75%',
                textStyle: {
                  color: '#3cc7f2',
                  fontSize: 24
                },
                subtext: '总分：100分',
                subtextStyle: {
                  color: '#909090'
                },
                itemGap: -5, // 主副标题距离
                left: 'center',
                top: 'center'
              },
              angleAxis: {
                max: 100, // 满分
                clockwise: true, // 逆时针
                // 隐藏刻度线
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                splitLine: {
                  show: false
                }
              },
              radiusAxis: {
                type: 'category',
                // 隐藏刻度线
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  show: false
                },
                splitLine: {
                  show: false
                }
              },
              polar: {
                center: ['50%', '50%'],
                radius: '100%' // 图形大小
              },
              series: [
                {
                  type: 'bar',
                  data: [
                    {
                      name: '作文得分',
                      value: 75,
                      itemStyle: {
                        normal: {
                          color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                              { offset: 0, color: '#3cc7f2' },
                              { offset: 1, color: '#1b6ddc' }
                            ],
                            globalCoord: true // 缺省为 false
                          }
                        }
                      }
                    }
                  ],
                  coordinateSystem: 'polar',
                  roundCap: true,
                  barWidth: 20,
                  barGap: '-100%', // 两环重叠
                  z: 2
                },
                {
                  // 灰色环
                  type: 'bar',
                  data: [
                    {
                      value: 100,
                      itemStyle: {
                        color: '#e2e2e2',
                        shadowColor: '#d3d3d3',
                        shadowBlur: 5,
                        shadowOffsetY: 2
                      }
                    }
                  ],
                  coordinateSystem: 'polar',
                  roundCap: true,
                  barWidth: 20,
                  barGap: '-100%', // 两环重叠
                  z: 1
                }
              ]
            } as any
          }
        },
        {
          icon: 'icon-sandiantu',
          label: '图表-散点图',
          type: 'echarts',
          props: {
            options: {
              xAxis: {},
              yAxis: {},
              series: [
                {
                  symbolSize: 20,
                  data: [
                    [10.0, 8.04],
                    [8.07, 6.95],
                    [13.0, 7.58],
                    [9.05, 8.81],
                    [11.0, 8.33],
                    [14.0, 7.66],
                    [13.4, 6.81],
                    [10.0, 6.33],
                    [14.0, 8.96],
                    [12.5, 6.82],
                    [9.15, 7.2],
                    [11.5, 7.2],
                    [3.03, 4.23],
                    [12.2, 7.83],
                    [2.02, 4.47],
                    [1.05, 3.33],
                    [4.05, 4.96],
                    [6.03, 7.24],
                    [12.0, 6.26],
                    [12.0, 8.84],
                    [7.08, 5.82],
                    [5.02, 5.68]
                  ],
                  type: 'scatter'
                }
              ]
            } as any
          }
        },
        {
          icon: 'icon-yibiaopan',
          label: '图表-仪表盘',
          type: 'echarts',
          props: {
            options: {
              tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
              },
              series: [
                {
                  name: 'Pressure',
                  type: 'gauge',
                  detail: {
                    formatter: '{value}'
                  },
                  data: [
                    {
                      value: 50,
                      name: 'SCORE'
                    }
                  ]
                }
              ]
            } as any
          }
        },
        { icon: 'icon-fuwenbenkuang', label: '富文本', type: 'input' },
        { icon: 'icon-erweima', label: '二维码', type: 'tree-select' },
        {
          icon: 'icon-yansexuanzeqi',
          label: '颜色选择器',
          type: 'input',
          props: { type: 'color', label: '颜色选择器' }
        }
      ]
    },
    {
      active: true,
      disabled: false,
      label: '布局控件',
      widgets: [
        {
          icon: 'icon-RectangleCopy',
          label: '两栏布局',
          type: 'row',
          props: {
            nzBordered: true
          },
          fieldGroup: this.createCols(12, 12)
        },
        {
          icon: 'icon-sanlan',
          label: '三栏布局',
          type: 'row',
          props: {
            nzBordered: true
          },
          fieldGroup: this.createCols(8, 8, 8)
        },
        {
          icon: 'icon-silan',
          label: '四栏布局',
          type: 'row',
          props: {
            nzBordered: true
          },
          fieldGroup: this.createCols(6, 6, 6, 6)
        },
        {
          icon: 'icon-line-layoutleftzuobuju-01',
          label: '1:3布局',
          type: 'row',
          props: {
            nzBordered: true
          },
          fieldGroup: this.createCols(6, 18)
        },
        {
          icon: 'icon-line-layoutrightyoubuju-01',
          label: '3:1布局',
          type: 'row',
          props: {
            nzBordered: true
          },
          fieldGroup: this.createCols(18, 6)
        },
        {
          icon: 'icon-creditcard',
          label: '卡片',
          type: 'formly-group',
          canHaveChildren: true,
          childrenPath: 'fieldGroup',
          wrappers: ['card-wrapper'],
          fieldGroup: [],
          props: {
            nzTitle: '卡片',
            nzBordered: true
          }
        },
        { icon: 'icon-jinggaotishi', label: '提示', type: 'modal' },
        {
          icon: 'icon-Modals',
          label: '对话框',
          type: 'formly-group',
          props: {
            nzVisible: true,
            nzTitle: '测试',
            nzOkText: '确定',
            nzMask: false,
            nzWidth: '800px',
            nzOnOk: (v: NzSafeAny, f: FormlyFieldConfig) => (f.props!.nzVisible = false),
            nzOnCancel: (v: NzSafeAny, f: FormlyFieldConfig) => (f.props!.nzVisible = false)
          },
          canHaveChildren: true,
          childrenPath: 'fieldGroup',
          fieldGroup: [],
          wrappers: ['modal-wrapper']
        },
        {
          icon: 'icon-tabs1',
          label: '选项卡',
          type: 'tabs',
          fieldGroup: [
            {
              label: '选项卡',
              props: { tab: { nzTitle: '百度' } },
              type: 'formly-group',
              canHaveChildren: true,
              childrenPath: 'fieldGroup',
              fieldGroup: []
            },
            {
              label: '选项卡',
              props: { tab: { nzTitle: '阿里' } },
              type: 'formly-group',
              canHaveChildren: true,
              childrenPath: 'fieldGroup',
              fieldGroup: []
            },
            {
              label: '选项卡',
              props: { tab: { nzTitle: '腾讯' } },
              type: 'formly-group',
              canHaveChildren: true,
              childrenPath: 'fieldGroup',
              fieldGroup: []
            }
          ]
        },
        {
          icon: 'icon-zidingyishuju',
          label: '自定义区域',
          type: 'formly-group',
          fieldGroup: [],
          canHaveChildren: true,
          childrenPath: 'fieldGroup'
        }
      ]
    }
  ];
  private widgetOptions: TempWidgetOption[] = [];
  @ViewChild('source') source!: ElementRef<HTMLDivElement>;
  get connectedTo(): string[] {
    return this.editorService.getConnectedTo();
  }

  constructor(public editorService: FormlyEditorService) {
    super();
  }

  ngOnInit(): void {}

  canEnter = () => false;

  /**
   * 拖动的源控件离开当前容器时,在当前元素位置添加一个相同的临时控件
   * @param panel 当前panel
   * @param event
   */
  onDropListExited(panel: PanelOption, event: CdkDragExit): void {
    if (this.dropEnter) {
      return;
    }
    this.dropEnter = true;
    this.widgetOptions = panel.widgets || [];
    const currentIdx = this.widgetOptions.indexOf(event.item.data.field);
    if (currentIdx >= 0) {
      this.widgetOptions.splice(currentIdx + 1, 0, {
        ...event.item.data.field,
        temp: true
      });
    }
  }

  cdkDragReleased() {
    this.dropEnter = false;
    this.editorService!.dragStart = false;
    for (let i = this.widgetOptions.length - 1; i >= 0; i--) {
      if (this.widgetOptions[i].temp) {
        this.widgetOptions.splice(i, 1);
      }
    }
  }

  getItemDragData(field: WidgetOption): ItemDragData {
    return {
      action: DragAction.COPY,
      field: field as IEditorFormlyField
    };
  }

  /**
   * 创建列容器
   * @param cols
   * @private
   */
  private createCols(...cols: number[]): IEditorFormlyField[] {
    return cols.map(col => ({
      type: 'formly-group',
      fieldGroup: [],
      canHaveChildren: true,
      childrenPath: 'fieldGroup',
      props: { colNzSpan: col }
    }));
  }
}

export interface PanelOption {
  active?: boolean;
  disabled?: boolean;
  label: string;
  widgets?: WidgetOption[];
}

type TempWidgetOption = WidgetOption & { temp?: boolean };
