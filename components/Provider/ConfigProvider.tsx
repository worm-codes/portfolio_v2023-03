import { ReactNode } from 'react';

import { ConfigProvider } from 'antd';
import 'dayjs/locale/tr';

interface ConfigProps {
  children: ReactNode;
}

/** Projenin şu anda yalnızca admin panelinde antd bulunmaktadır. Fakat yine de tüm app provider ile sarılmıştır.
 * Antd'nin panel dışında kullanımı kesinleşince uygun yere taşınacaktır.
 */

const Config = ({ children }: ConfigProps) => {
  return <ConfigProvider>{children}</ConfigProvider>;
};

export default Config;
